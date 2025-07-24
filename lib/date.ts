import { format, parseISO, addDays } from 'date-fns';

export const dateFromString = (dateString: string): Date => {
  return parseISO(dateString);
};

export const formatDateFromString = (dateString: string): string => {
  const date = dateFromString(dateString);
  return format(date, 'EEE MMM d @ h:mm a');
};

export const formatShortDateFromString = (dateString: string): string => {
  const date = dateFromString(dateString);
  return format(date, 'MMM d');
};

export type DueStatus = 'past' | 'tonight' | 'soon' | 'regular';

export const dueStatus = (dateString: string): DueStatus => {
  const date = dateFromString(dateString);
  const now = new Date();
  const tonightCutoff = addDays(now, 1);
  const soonCutoff = addDays(now, 3);

  if (date < now) return 'past';
  if (date < tonightCutoff) return 'tonight';
  if (date < soonCutoff) return 'soon';
  return 'regular';
};
