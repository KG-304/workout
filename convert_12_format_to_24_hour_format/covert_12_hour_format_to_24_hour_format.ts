export function timeConversion(s: string) {
  let timeLocal = s;

  let AMorPM = timeLocal.slice(timeLocal.length - 2, timeLocal.length);
  timeLocal = timeLocal.slice(0, timeLocal.length - 2);

  let timeSeparation = timeLocal.split(":");

  let hour = timeSeparation[0];
  let minutes = timeSeparation[1];
  let seconds = timeSeparation[2];

  if (AMorPM === "PM" && hour !== "12") {
    hour = `${Number(hour) + 12}`;
  }

  if (AMorPM === "AM" && hour === "12") {
    hour = "00";
  }

  return `${hour}:${minutes}:${seconds}`;
}
