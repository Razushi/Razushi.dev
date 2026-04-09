import type { BlogEntry } from './content';
import { joinSlugSegments, slugifySegment, splitContentPath } from './paths';

export interface Breadcrumb {
  label: string;
  href?: string;
}

export interface BlogPostRecord {
  entry: BlogEntry;
  rawSegments: string[];
  slugSegments: string[];
  slugPath: string;
  folderSegments: string[];
  folderPath: string;
  displayTitle: string;
}

export interface BlogFolderRecord {
  slug: string;
  label: string;
  mostRecentDate?: Date;
}

export interface BlogDirectoryListing {
  folders: BlogFolderRecord[];
  posts: BlogPostRecord[];
}

const compareLabels = (left: string, right: string) =>
  left.localeCompare(right, 'en', { sensitivity: 'base' });

const hasPrefix = (value: string[], prefix: string[]) =>
  prefix.every((segment, index) => value[index] === segment);

const createLabelMap = (records: BlogPostRecord[]) => {
  const labels = new Map<string, string>();

  for (const record of records) {
    record.slugSegments.forEach((_, index) => {
      const slug = joinSlugSegments(record.slugSegments.slice(0, index + 1));
      const label = record.rawSegments[index];

      if (slug && label && !labels.has(slug)) {
        labels.set(slug, label);
      }
    });
  }

  return labels;
};

const createFolderMostRecentDateMap = (records: BlogPostRecord[]) => {
  const dates = new Map<string, Date>();

  for (const record of records) {
    const date = record.entry.data.updatedDate ?? record.entry.data.pubDate;
    if (!date) continue;

    for (let index = 1; index < record.slugSegments.length; index += 1) {
      const slug = joinSlugSegments(record.slugSegments.slice(0, index));
      const existing = dates.get(slug);
      if (!existing || date > existing) {
        dates.set(slug, date);
      }
    }
  }

  return dates;
};

export function createBlogRecords(entries: BlogEntry[]) {
  return entries.map((entry) => {
    const rawSegments = splitContentPath(entry.id);
    const slugSegments = rawSegments.map(slugifySegment);
    const slugPath = joinSlugSegments(slugSegments);
    const folderSegments = slugSegments.slice(0, -1);
    const displayTitle = entry.data.title ?? rawSegments.at(-1) ?? entry.id;

    return {
      entry,
      rawSegments,
      slugSegments,
      slugPath,
      folderSegments,
      folderPath: joinSlugSegments(folderSegments),
      displayTitle,
    };
  });
}

export function listBlogDirectory(records: BlogPostRecord[], directorySegments: string[]) {
  const folders = new Map<string, BlogFolderRecord>();
  const posts: BlogPostRecord[] = [];
  const folderMostRecentDates = createFolderMostRecentDateMap(records);

  for (const record of records) {
    if (!hasPrefix(record.slugSegments, directorySegments)) {
      continue;
    }

    if (record.slugSegments.length === directorySegments.length) {
      continue;
    }

    if (record.slugSegments.length === directorySegments.length + 1) {
      posts.push(record);
      continue;
    }

    const childSegments = record.slugSegments.slice(0, directorySegments.length + 1);
    const slug = joinSlugSegments(childSegments);
    const label = record.rawSegments[directorySegments.length] ?? childSegments.at(-1) ?? slug;

    if (!folders.has(slug)) {
      const mostRecentDate = folderMostRecentDates.get(slug);
      folders.set(slug, { slug, label, mostRecentDate });
    }
  }

  posts.sort((left, right) => {
    const dateDelta =
      (right.entry.data.pubDate?.valueOf() ?? 0) - (left.entry.data.pubDate?.valueOf() ?? 0);
    if (dateDelta !== 0) {
      return dateDelta;
    }

    return compareLabels(left.displayTitle, right.displayTitle);
  });

  const sortedFolders = Array.from(folders.values()).sort((left, right) =>
    compareLabels(left.label, right.label),
  );

  return { folders: sortedFolders, posts };
}

export interface BlogTreeNode {
  type: 'folder' | 'post';
  label: string;
  slug: string;
  mostRecentDate?: Date;
  record?: BlogPostRecord;
  children?: BlogTreeNode[];
}

export function buildBlogTree(records: BlogPostRecord[], segments: string[] = []): BlogTreeNode[] {
  const listing = listBlogDirectory(records, segments);
  const nodes: BlogTreeNode[] = [];

  for (const folder of listing.folders) {
    nodes.push({
      type: 'folder',
      label: folder.label,
      slug: folder.slug,
      mostRecentDate: folder.mostRecentDate,
      children: buildBlogTree(records, folder.slug.split('/')),
    });
  }

  for (const post of listing.posts) {
    nodes.push({
      type: 'post',
      label: post.displayTitle,
      slug: post.slugPath,
      record: post,
    });
  }

  return nodes;
}

export function findBlogPost(records: BlogPostRecord[], segments: string[]) {
  const slugPath = joinSlugSegments(segments);
  return records.find((record) => record.slugPath === slugPath) ?? null;
}

export function getBlogStaticPaths(records: BlogPostRecord[]) {
  const folderPaths = new Set<string>();

  for (const record of records) {
    for (let index = 1; index < record.slugSegments.length; index += 1) {
      folderPaths.add(joinSlugSegments(record.slugSegments.slice(0, index)));
    }
  }

  return [
    ...Array.from(folderPaths).sort(compareLabels),
    ...records.map((record) => record.slugPath),
  ].map((path) => ({
    params: { segments: path },
  }));
}

export function getFolderLabel(records: BlogPostRecord[], segments: string[]) {
  if (segments.length === 0) {
    return 'Blog';
  }

  const labels = createLabelMap(records);
  return labels.get(joinSlugSegments(segments)) ?? segments.at(-1) ?? 'Blog';
}

export function buildBlogBreadcrumbs(
  records: BlogPostRecord[],
  segments: string[],
  post?: BlogPostRecord | null,
) {
  const labels = createLabelMap(records);
  const breadcrumbs: Breadcrumb[] = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
  ];

  const folderSegments = post ? segments.slice(0, -1) : segments;

  folderSegments.forEach((_, index) => {
    const slug = joinSlugSegments(folderSegments.slice(0, index + 1));

    breadcrumbs.push({
      label: labels.get(slug) ?? folderSegments[index] ?? slug,
    });
  });

  if (post) {
    breadcrumbs.push({ label: post.displayTitle });
  }

  return breadcrumbs;
}
