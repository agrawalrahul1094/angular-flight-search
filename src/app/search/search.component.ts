import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { SearchService } from "./search.service";
import {
  ISearchParams,
  ISearchResult,
} from "../models/search-params.interface";
import { SearchType } from "../models/search-type.enum";
import { findPaths } from "../shared/flightManager";
import { transformFlightDates } from "./../shared/utils";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnInit {
  searchResult: ISearchResult;

  constructor(private searchService: SearchService, private cdRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.searchService.getFlightList();
  }

  onSearch(searchParams: ISearchParams) {
    // this.searchResult = {
    //   oneway: this.searchService.searchFlights(
    //     searchParams.journeyDetails.origin,
    //     searchParams.journeyDetails.destination
    //   ),
    //   return:
    //     searchParams.searchType === SearchType.RETURN ? this.searchService.searchFlights(
    //           searchParams.journeyDetails.destination,
    //           searchParams.journeyDetails.origin
    //         )
    //       : [],
    //   searchType: searchParams.searchType,
    //   journeyDetails: searchParams.journeyDetails,
    // };
    const routePayload = {
      flights: transformFlightDates(this.searchService.flightList),
      criteria: {
        origin: searchParams.journeyDetails.origin,
        destination: searchParams.journeyDetails.destination,
        departureDate: searchParams.journeyDetails.departure,
        returnDate: searchParams.journeyDetails.return,
        numOfPassengers: searchParams.journeyDetails.passengerCount,
      },
    };
    const {
      flights,
      criteria: {
        returnDate,
        origin,
        destination,
        departureDate,
        numOfPassengers,
      },
    } = routePayload;

    this.searchResult = {
      oneway: findPaths({
        flights,
        criteria: { origin, destination, date: departureDate, numOfPassengers },
      }),
      return:
        searchParams.searchType === SearchType.RETURN
          ? findPaths({
              flights,
              criteria: {
                origin: destination,
                destination: origin,
                date: returnDate,
                numOfPassengers,
              },
            })
          : [],
      searchType: searchParams.searchType,
      journeyDetails: searchParams.journeyDetails,
    };
    console.log("SearchResult", this.searchResult);
    this.cdRef.detectChanges();
  }

  isReturnJourney() {
    return this.searchResult.searchType === SearchType.RETURN;
  }

  getOnewayConfig() {
    return {
      result: this.searchResult.oneway,
      journeyDetail: {
        origin: this.searchResult.journeyDetails.origin,
        destination: this.searchResult.journeyDetails.destination,
        date: this.searchResult.journeyDetails.departure,
      },
      isReturnJourney: false,
    };
  }

  getReturnConfig() {
    return {
      result: this.searchResult.return,
      journeyDetail: {
        origin: this.searchResult.journeyDetails.destination,
        destination: this.searchResult.journeyDetails.origin,
        date: this.searchResult.journeyDetails.return,
      },
      isReturnJourney: true,
    };
  }
}
