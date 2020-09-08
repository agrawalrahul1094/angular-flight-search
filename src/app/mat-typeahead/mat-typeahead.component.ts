import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import { IMatTypeahead } from './mat-typeahead.interface';

@Component({
  selector: 'app-mat-typeahead',
  templateUrl: './mat-typeahead.component.html',
  styleUrls: ['./mat-typeahead.component.scss']
})
export class MatTypeaheadComponent implements OnInit {

  @Input() config: IMatTypeahead;

  control = new FormControl();
  items: string[];
  filteredItems: Observable<string[]>;

  constructor() { }

  ngOnInit() {
    this.items = this.config.itemList;
    this.filteredItems = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.items.filter(item => this._normalizeValue(item).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

}
