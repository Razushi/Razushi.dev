import { execFile } from 'node:child_process';
import { stat } from 'node:fs/promises';
import path from 'node:path';
import { promisify } from 'node:util';
import { getCollection, type CollectionEntry } from 'astro:content';

export type BlogEntry = CollectionEntry<'blog'>;

export interface BlogEntryWithDates {
  entry: BlogEntry;
  updatedDate: Date | null;
}

const execFileAsync = promisify(execFile);
const hasRenderableBody = (entry: BlogEntry) =>
  typeof entry.body === 'string' && entry.body.trim().length > 0;

async function getGitModifiedDates(): Promise<Map<string, Date>> {
  const map = new Map<string, Date>();
  const cwd = process.cwd();

  try {
    const { stdout } = await execFileAsync(
      'git',
      ['log', '--pretty=format:COMMIT %aI', '--name-only', '--diff-filter=ACRMT'],
      { cwd },
    );

    let currentDate: Date | null = null;
    const prefix = 'src/content/blog/';

    for (const line of stdout.split('\n')) {
      const trimmed = line.trim();
      if (!trimmed) continue;

      if (trimmed.startsWith('COMMIT ')) {
        currentDate = new Date(trimmed.slice(7));
      } else if (currentDate && trimmed.startsWith(prefix)) {
        const entryId = trimmed.slice(prefix.length).replace(/\.(md|mdx)$/i, '');
        if (!map.has(entryId)) map.set(entryId, currentDate);
      }
    }
  } catch {
    // git unavailable — fall through to mtime
  }

  return map;
}

async function getFileMtime(entryId: string): Promise<Date | null> {
  const base = path.join(process.cwd(), 'src', 'content', 'blog');

  for (const ext of ['.md', '.mdx']) {
    try {
      const s = await stat(path.join(base, `${entryId}${ext}`));
      return s.mtime;
    } catch {
      // try next extension
    }
  }

  return null;
}

export async function getBlogEntries(): Promise<BlogEntryWithDates[]> {
  const [entries, gitDates] = await Promise.all([
    getCollection('blog', ({ data }) => (import.meta.env.DEV ? true : !data.draft)),
    getGitModifiedDates(),
  ]);

  const entriesWithDates = await Promise.all(
    entries.filter(hasRenderableBody).map(async (entry) => ({
      entry,
      updatedDate:
        entry.data.updatedDate ??
        gitDates.get(entry.id) ??
        (await getFileMtime(entry.id)),
    })),
  );

  return entriesWithDates.sort((left, right) => {
    const dateDelta =
      (right.entry.data.pubDate?.valueOf() ?? 0) - (left.entry.data.pubDate?.valueOf() ?? 0);
    if (dateDelta !== 0) return dateDelta;
    return (left.entry.data.title ?? '').localeCompare(right.entry.data.title ?? '', 'en', {
      sensitivity: 'base',
    });
  });
}
