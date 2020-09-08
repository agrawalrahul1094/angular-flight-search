import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiStopCardComponent } from './multi-stop-card.component';

describe('MultiStopCardComponent', () => {
  let component: MultiStopCardComponent;
  let fixture: ComponentFixture<MultiStopCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiStopCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiStopCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
