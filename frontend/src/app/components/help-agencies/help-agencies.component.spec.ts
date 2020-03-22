import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpAgenciesComponent } from './help-agencies.component';

describe('HelpAgenciesComponent', () => {
  let component: HelpAgenciesComponent;
  let fixture: ComponentFixture<HelpAgenciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpAgenciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpAgenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
