import { stat } from 'node:fs/promises';
import path from 'node:path';
import { getCollection, type CollectionEntry } from 'astro:content';

export type BlogEntry = CollectionEntry<'blog'>;

const contentRoot = new URL('../../content/blog/', import.meta.url);
const hasRenderableBody = (entry: BlogEntry) =>
  typeof entry.body === 'string' && entry.body.trim().length > 0;

async function getEntryModifiedDate(entryId: string) {
  const candidateExtensions = ['.md', '.mdx'];

  for (const extension of candidateExtensions) {
    try {
      const filePath = path.join(contentRoot.pathname, `${entryId}${extension}`);
      const fileStats = await stat(filePath);
      return fileStats.mtime;
    } catch {
      // Try the next candidate extension.
    }
  }

  return null;
}

export async function getBlogEntries() {
  const entries = (
    await getCollection('blog', ({ data }) =>
      import.meta.env.DEV ? true : !data.draft,
    )
  ).filter(hasRenderableBody);

  await Promise.all(
    entries.map(async (entry) => {
      const modifiedDate = await getEntryModifiedDate(entry.id);
      if (!modifiedDate) {
        return;
      }

      entry.data.updatedDate = modifiedDate;
    }),
  );

  return entries.sort((left, right) => {
    const dateDelta =
      (right.data.pubDate?.valueOf() ?? 0) - (left.data.pubDate?.valueOf() ?? 0);
    if (dateDelta !== 0) {
      return dateDelta;
    }

    return (left.data.title ?? '').localeCompare(right.data.title ?? '', 'en', {
      sensitivity: 'base',
    });
  });
}
