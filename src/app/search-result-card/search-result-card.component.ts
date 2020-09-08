import { Component, OnInit, Input } from "@angular/core";
import { IFlightDetails } from "../models/flight-details.interface";
import { getTimeDiff } from "../shared/utils";

@Component({
  selector: "app-search-result-card",
  templateUrl: "./search-result-card.component.html",
  styleUrls: ["./search-result-card.component.scss"],
})
export class SearchResultCardComponent implements OnInit {
  @Input() config: any;
  @Input() isMultiStopDetail = false;

  constructor() {}

  ngOnInit() {}

  getJourneyDuration(flightDetail: IFlightDetails) {
    const date1 = new Date(
      `${flightDetail.date} ${flightDetail.departureTime}`
    );
    const date2 = new Date(`${flightDetail.date} ${flightDetail.arrivalTime}`);

    return getTimeDiff(date1, date2);
  }
}
