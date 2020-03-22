import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsAuthoriseComponent } from './payments-authorise.component';

describe('PaymentsAuthoriseComponent', () => {
  let component: PaymentsAuthoriseComponent;
  let fixture: ComponentFixture<PaymentsAuthoriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentsAuthoriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsAuthoriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
