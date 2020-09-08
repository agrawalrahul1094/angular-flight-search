import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { JourneyDetails } from '../models/journey-details';
import { ISearchParams } from '../models/search-params.interface';
import { SearchType } from '../models/search-type.enum';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFormComponent implements OnInit {
  @Output() search: EventEmitter<ISearchParams> = new EventEmitter();
  model: JourneyDetails;
  cityList = ['Pune (PNQ)', 'Mumbai (BOM)', 'Bengaluru (BLR)', 'Delhi (DEL)'];
  isReturnJourney = false;

  constructor() {}

  ngOnInit() {
    this.model = new JourneyDetails();
  }

  onSearch(event) {
    console.log(this.model);
    const searchParams: ISearchParams = {
      journeyDetails: this.model,
      searchType: this.isReturnJourney ? SearchType.RETURN : SearchType.ONEWAY
    };
    this.search.emit(searchParams);

  }

  trackByItems(index: number, item: any) {
    return item;
  }

  onTabClick(returnTabActive) {
    this.isReturnJourney = returnTabActive;
  }
}
