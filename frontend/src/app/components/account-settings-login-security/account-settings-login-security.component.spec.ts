import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSettingsLoginSecurityComponent } from './account-settings-login-security.component';

describe('AccountSettingsLoginSecurityComponent', () => {
  let component: AccountSettingsLoginSecurityComponent;
  let fixture: ComponentFixture<AccountSettingsLoginSecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountSettingsLoginSecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSettingsLoginSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
