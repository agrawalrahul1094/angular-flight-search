import { IFlightDetails } from '../models/flight-details.interface';

export function transformFlightDates(flights) {
  return flights.map((flight) => {
    return {
      ...flight,
      arrivalTimeStamp: new Date(
        `${flight.date} ${flight.arrivalTime}`
      ).getTime(),
      departureTimeStamp: new Date(
        `${flight.date} ${flight.departureTime}`
      ).getTime(),
    };
  });
}

export function getTimeDiff(date1: Date, date2: Date) {
  // const date1 = new Date(`${flightDetail.date} ${flightDetail.departureTime}`);
  // const date2 = new Date(`${flightDetail.date} ${flightDetail.arrivalTime}`);

  const diffInMs = date2.getTime() - date1.getTime();

  let msec = diffInMs;
  const hh = Math.floor(diffInMs / 1000 / 60 / 60);
  msec -= hh * 1000 * 60 * 60;
  const mm = Math.floor(msec / 1000 / 60);
  msec -= mm * 1000 * 60;
  const ss = Math.floor(msec / 1000);
  msec -= ss * 1000;

  const diff = `${hh < 10 ? '0' + hh : hh}h ${mm < 10 ? '0' + mm : mm}m`;
  return diff;
}
