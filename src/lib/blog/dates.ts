const dateFormatter = new Intl.DateTimeFormat('en-AU', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
});

const isoDateFormatter = new Intl.DateTimeFormat('en-CA', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
});

const fullDateFormatter = new Intl.DateTimeFormat('en', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
  timeZoneName: 'short',
});

const relativeFormatter = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

const RELATIVE_UNITS: [Intl.RelativeTimeFormatUnit, number][] = [
  ['year', 365 * 24 * 60 * 60 * 1000],
  ['month', 30 * 24 * 60 * 60 * 1000],
  ['week', 7 * 24 * 60 * 60 * 1000],
  ['day', 24 * 60 * 60 * 1000],
  ['hour', 60 * 60 * 1000],
  ['minute', 60 * 1000],
];

export const formatDate = (date: Date | undefined | null) =>
  date ? dateFormatter.format(date) : 'N/A';

export const formatIsoDate = (date: Date | undefined | null) =>
  date ? isoDateFormatter.format(date) : 'N/A';

export const formatFullDate = (date: Date | undefined | null) =>
  date ? fullDateFormatter.format(date) : 'N/A';

export const formatRelativeDate = (date: Date | undefined | null): string => {
  if (!date) return 'N/A';
  const diff = date.getTime() - Date.now();
  const absDiff = Math.abs(diff);
  for (const [unit, ms] of RELATIVE_UNITS) {
    if (absDiff >= ms) {
      return relativeFormatter.format(Math.round(diff / ms), unit);
    }
  }
  return 'just now';
};
