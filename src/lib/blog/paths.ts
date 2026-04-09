const fileExtensionPattern = /\.(md|mdx)$/i;

export const slugifySegment = (value: string) =>
  value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

export const splitContentPath = (id: string) =>
  id
    .replace(/^blog\//, '')
    .replace(fileExtensionPattern, '')
    .split('/')
    .filter(Boolean);

export const joinSlugSegments = (segments: string[]) => segments.join('/');
