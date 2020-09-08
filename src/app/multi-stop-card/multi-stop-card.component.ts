import {
  Component,
  OnInit,
  Input,
  ChangeDetectorRef,
  ViewChild,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { getTimeDiff } from '../shared/utils';

@Component({
  selector: 'app-multi-stop-card',
  templateUrl: './multi-stop-card.component.html',
  styleUrls: ['./multi-stop-card.component.scss'],
})
export class MultiStopCardComponent implements OnInit {
  @Input() config: any;

  @ViewChild('detailContainer', { read: ViewContainerRef, static: true })
  detailContainerRef: ViewContainerRef;
  @ViewChild('detailTemplate', { read: TemplateRef, static: true })
  detailTemplateRef: TemplateRef<any>;

  showDetails = false;

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.detailContainerRef && this.detailContainerRef.clear();
    this.showDetails &&
      this.detailContainerRef.createEmbeddedView(this.detailTemplateRef);
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
    this.detailContainerRef && this.detailContainerRef.clear();
    this.showDetails &&
      this.detailContainerRef.createEmbeddedView(this.detailTemplateRef);
    this.cdRef.detectChanges();
  }

  getJourneyDuration(flightDetail) {
    const date1 = new Date(
      `${flightDetail.date} ${flightDetail.departureTime}`
    );
    const date2 = new Date(`${flightDetail.date} ${flightDetail.arrivalTime}`);

    return getTimeDiff(date1, date2);
  }

  getLayoverTime(flights, index) {
    const flightDetail1 = flights[index];
    const flightDetail2 = flights[index + 1];

    const date1 = new Date(
      `${flightDetail1.date} ${flightDetail1.departureTime}`
    );
    const date2 = new Date(`${flightDetail2.date} ${flightDetail2.arrivalTime}`);

    return getTimeDiff(date1, date2);
  }
}
