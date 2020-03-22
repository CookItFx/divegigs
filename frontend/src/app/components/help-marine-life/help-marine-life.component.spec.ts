import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpMarineLifeComponent } from './help-marine-life.component';

describe('HelpMarineLifeComponent', () => {
  let component: HelpMarineLifeComponent;
  let fixture: ComponentFixture<HelpMarineLifeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpMarineLifeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpMarineLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
