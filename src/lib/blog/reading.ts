const WORDS_PER_MINUTE = 220;

export const stripMarkdown = (value: string | undefined | null) =>
  (value ?? '')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/!\[[^\]]*]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]+)]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#>*_~[\]-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

export function getReadingTimeMinutes(source: string | undefined | null): number {
  const plainText = stripMarkdown(source);
  const wordCount = plainText.length > 0 ? plainText.split(/\s+/).length : 0;
  return Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE));
}

export function getReadingTimeLabel(source: string | undefined | null) {
  return `${getReadingTimeMinutes(source)} min read`;
}
