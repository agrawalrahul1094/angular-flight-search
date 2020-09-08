import { JourneyDetails } from './journey-details';
import { SearchType } from './search-type.enum';
import { IFlightDetails } from './flight-details.interface';

export interface ISearchParams {
  journeyDetails: JourneyDetails;
  searchType: SearchType;
}

export interface ISearchResult {
  oneway: IFlightDetails[];
  return: IFlightDetails[];
  searchType: SearchType;
  journeyDetails: JourneyDetails;
}
