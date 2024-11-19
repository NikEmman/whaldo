export const parseTime = (milliseconds) => {
  const hours = Math.floor(milliseconds / 3600000);
  const minutes = Math.floor((milliseconds % 3600000) / 60000);
  const seconds = Math.floor((milliseconds % 60000) / 1000);
  const tenthsOfSecond = Math.floor((milliseconds % 1000) / 100);

  return {
    hours: padNumber(hours),
    minutes: padNumber(minutes),
    seconds: padNumber(seconds),
    tenthsOfSecond: padNumber(tenthsOfSecond),
  };
};

function padNumber(number) {
  let num = number.toString();
  if (num.length < 2) num = "0" + num;
  return num;
}
export function formatTime(parsedTime) {
  return `${parsedTime.hours}:${parsedTime.minutes}:${parsedTime.seconds}.${parsedTime.tenthsOfSecond}`;
}
