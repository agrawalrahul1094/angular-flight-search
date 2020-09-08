import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultCardComponent } from './search-result-card.component';



@NgModule({
  declarations: [SearchResultCardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SearchResultCardComponent
  ],
  entryComponents: [
    SearchResultCardComponent
  ]
})
export class SearchResultCardModule { }
