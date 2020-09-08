import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultComponent implements OnInit {
  @Input() config: any;

  constructor() {}

  ngOnInit() {}

  getFormatedDate(date: string) {
    const options = { weekday: 'short', day: 'numeric', month: 'long' };
    const dt = new Date(date);

    return dt.toLocaleDateString('en-US', options);
  }
}
