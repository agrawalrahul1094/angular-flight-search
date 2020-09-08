import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiStopCardComponent } from './multi-stop-card.component';
import { SearchResultCardModule } from '../search-result-card/search-result-card.module';



@NgModule({
  declarations: [MultiStopCardComponent],
  imports: [
    CommonModule,
    SearchResultCardModule
  ],
  exports: [MultiStopCardComponent]
})
export class MultiStopCardModule { }
