import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { SearchFormModule } from '../search-form/search-form.module';
import { SearchResultModule } from '../search-result/search-result.module';
import { SearchService } from './search.service';


@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    SearchFormModule,
    SearchResultModule
  ],
  providers: [SearchService],

})
export class SearchModule { }
