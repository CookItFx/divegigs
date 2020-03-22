import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSettingsPaymentsPayoutsComponent } from './account-settings-payments-payouts.component';

describe('AccountSettingsPaymentsPayoutsComponent', () => {
  let component: AccountSettingsPaymentsPayoutsComponent;
  let fixture: ComponentFixture<AccountSettingsPaymentsPayoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountSettingsPaymentsPayoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSettingsPaymentsPayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
