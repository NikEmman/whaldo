export const parseTime = (milliseconds) => {
  const hours = Math.floor(milliseconds / 3600000);
  const minutes = Math.floor((milliseconds % 3600000) / 60000);
  const seconds = Math.floor((milliseconds % 60000) / 1000);
  const tenthsOfSecond = Math.floor((milliseconds % 1000) / 100);
  return { hours, minutes, seconds, tenthsOfSecond };
};
