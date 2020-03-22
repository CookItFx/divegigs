import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSettingsNotificationsComponent } from './account-settings-notifications.component';

describe('AccountSettingsNotificationsComponent', () => {
  let component: AccountSettingsNotificationsComponent;
  let fixture: ComponentFixture<AccountSettingsNotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountSettingsNotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSettingsNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
