import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTypeaheadComponent } from './mat-typeahead.component';

describe('MatTypeaheadComponent', () => {
  let component: MatTypeaheadComponent;
  let fixture: ComponentFixture<MatTypeaheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatTypeaheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatTypeaheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
