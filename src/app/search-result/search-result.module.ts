import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchResultRoutingModule } from './search-result-routing.module';
import { SearchResultComponent } from './search-result.component';
import { SearchResultCardModule } from '../search-result-card/search-result-card.module';
import { MultiStopCardModule } from '../multi-stop-card/multi-stop-card.module';


@NgModule({
  declarations: [SearchResultComponent],
  imports: [
    CommonModule,
    SearchResultRoutingModule,
    SearchResultCardModule,
    MultiStopCardModule
  ],
  exports: [
    SearchResultComponent
  ],
  entryComponents: [
    SearchResultComponent
  ]
})
export class SearchResultModule { }
