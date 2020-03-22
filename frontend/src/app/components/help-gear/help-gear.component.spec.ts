import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpGearComponent } from './help-gear.component';

describe('HelpGearComponent', () => {
  let component: HelpGearComponent;
  let fixture: ComponentFixture<HelpGearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpGearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpGearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
