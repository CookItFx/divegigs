import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceGuestsRequirementsComponent } from './experience-guests-requirements.component';

describe('ExperienceGuestsRequirementsComponent', () => {
  let component: ExperienceGuestsRequirementsComponent;
  let fixture: ComponentFixture<ExperienceGuestsRequirementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceGuestsRequirementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceGuestsRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
