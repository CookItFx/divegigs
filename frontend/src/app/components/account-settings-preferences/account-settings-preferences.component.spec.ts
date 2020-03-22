import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSettingsPreferencesComponent } from './account-settings-preferences.component';

describe('AccountSettingsPreferencesComponent', () => {
  let component: AccountSettingsPreferencesComponent;
  let fixture: ComponentFixture<AccountSettingsPreferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountSettingsPreferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSettingsPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
