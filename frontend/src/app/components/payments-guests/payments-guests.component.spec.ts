import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsGuestsComponent } from './payments-guests.component';

describe('PaymentsGuestsComponent', () => {
  let component: PaymentsGuestsComponent;
  let fixture: ComponentFixture<PaymentsGuestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentsGuestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsGuestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
