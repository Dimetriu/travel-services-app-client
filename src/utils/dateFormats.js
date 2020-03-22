import { DEFAULT_DATE_FORMAT } from '../constants/dateStringFormats';

export const fromatDate = (date, format = DEFAULT_DATE_FORMAT) => {
  const localDate = new Date(date);
   if (format === DEFAULT_DATE_FORMAT) {
    return localDate
      .toLocaleDateString()
      .split('/')
      .reverse()
      .join('-');
   }

   return localDate;
};
