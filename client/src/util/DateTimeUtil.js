import moment from 'moment';

/**
 * @param timeInMiliSeconds Tempo em milisegundos se null considera a data e hora atuais .
 */
export const getDateTimeFromTimeInMiliSeconds = (timeInMiliSeconds) => {
  const time = moment(timeInMiliSeconds);
  return time.format('DD-MM-YYYY HH:mm:ss');
};

/**
 * @param timeInMiliSeconds Tempo em milisegundos se null considera a data e hora atuais.
 */
export const getDateFormated = (timeInMiliSeconds) => {
  const time = moment(timeInMiliSeconds);
  return time.format('DD-MM-YYYY');
};


export const sortDateArray = (array, dateField) => array.sort((a, b) => {
  const dateB = b[dateField].split('-');
  const dateA = a[dateField].split('-');
  return new Date(dateA[2], dateA[1] - 1, dateA[0]) - new Date(dateB[2], dateB[1] - 1, dateB[0]);
});
