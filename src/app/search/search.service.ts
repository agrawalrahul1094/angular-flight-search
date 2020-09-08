import { Injectable } from "@angular/core";
import { BaseService } from "../services/base.service";
import { IFlightDetails } from "../models/flight-details.interface";
import { ISearchParams } from "../models/search-params.interface";
import { JourneyDetails } from "../models/journey-details";
import { JourneyType } from "../models/journey-type.enum";
import { Graph } from "../models/graph";

@Injectable()
export class SearchService {
  flightList: IFlightDetails[];
  flightGraph: Graph;

  constructor(private baseService: BaseService) {}

  getFlightList() {
    const flightListUrl =
      "https://tw-frontenders.firebaseio.com/advFlightSearch.json";
    this.baseService
      .getData(flightListUrl, {})
      .subscribe((res: IFlightDetails[]) => {
        console.log(res);
        this.flightList = res;
        this.generateGraph();
      });
  }

  generateGraph() {
    // Using the above implemented graph class
    this.flightGraph = new Graph(4);
    const vertices = [
      "Pune (PNQ)",
      "Mumbai (BOM)",
      "Bengaluru (BLR)",
      "Delhi (DEL)",
    ];

    // adding vertices
    for (const vertex of vertices) {
      this.flightGraph.addVertex(vertex);
    }

    // adding edges
    this.flightList.forEach(flight => {
      this.flightGraph.addEdge(flight.origin, flight.destination, flight);
    });

    // prints all vertex and
    // its adjacency list
    this.flightGraph.printGraph();
  }

  searchFlights(src: string, dest: string) {
    // return flightsResult
    let result = [];
    result = this.getNonstopFlights(this.flightList, src, dest);
    // const matchingSrcList = this.getMatchingSrcList(this.flightList, src);
    // if (matchingSrcList.length) {
    //   const newList = matchingSrcList.filter(flight => {
    //     const match = flight.destination === dest;
    //     if (match)  {
    //       result.push(flight);
    //       return false;
    //     }
    //     return true;
    //   });
    //   newList.forEach(flight => {
    //     this.searchFlights(flight.destination, dest);
    //   });
    // }
    // console.log('getpaths', this.flightGraph.getpaths(src, dest));
    return result;
  }

  getMatchingSrcList(flightList: IFlightDetails[], src: string) {
    return flightList.filter((flight) => {
      return flight.origin === src;
    });
  }

  getNonstopFlights(flightList, src, dest) {
    const result = [];
    flightList.map((flight) => {
      if (flight.origin === src && flight.destination === dest) {
        result.push({
          flightDetail: flight,
          journeyType: JourneyType.NONSTOP,
        });
      }
    });
    return result;
  }


}

