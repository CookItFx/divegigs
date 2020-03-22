import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpTravellingComponent } from './help-travelling.component';

describe('HelpTravellingComponent', () => {
  let component: HelpTravellingComponent;
  let fixture: ComponentFixture<HelpTravellingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpTravellingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpTravellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
