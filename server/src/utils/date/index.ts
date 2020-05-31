import moment from 'moment';

export const is_valid_date = (date: Date | string) => {
  const valid_formats = [
    moment.ISO_8601
  ];
  return moment(date, valid_formats, true).isValid();
}