import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsConfirmComponent } from './payments-confirm.component';

describe('PaymentsConfirmComponent', () => {
  let component: PaymentsConfirmComponent;
  let fixture: ComponentFixture<PaymentsConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentsConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
