import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpEnvironmentComponent } from './help-environment.component';

describe('HelpEnvironmentComponent', () => {
  let component: HelpEnvironmentComponent;
  let fixture: ComponentFixture<HelpEnvironmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpEnvironmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpEnvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
