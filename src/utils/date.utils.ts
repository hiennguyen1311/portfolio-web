import { dateFormat } from '@constants';
import moment, { MomentInput } from 'moment';

export function formatDate(date: MomentInput, format: string) {
  return moment(date).format(format);
}

export function isSameDate(d1: MomentInput, d2: MomentInput) {
  return moment(moment(d1).format(dateFormat.yyyyMMDD)).isSame(
    moment(d2).format(dateFormat.yyyyMMDD),
  );
}
