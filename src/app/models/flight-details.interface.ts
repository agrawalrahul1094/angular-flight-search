import { StringifyOptions } from "querystring";
import { Time } from '@angular/common';

export interface IFlightDetails {
  arrivalTime: string;
  date: Date;
  departureTime: string;
  destination: string;
  flightNo: string;
  name: string;
  origin: string;
  price: number;
}
