import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SearchFormRoutingModule } from './search-form-routing.module';
import { SearchFormComponent } from './search-form.component';


@NgModule({
  declarations: [SearchFormComponent],
  imports: [
    CommonModule,
    SearchFormRoutingModule,
    FormsModule
  ],
  exports: [
    SearchFormComponent
  ],
  entryComponents: [
    SearchFormComponent
  ]
})
export class SearchFormModule { }
