import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceYourBackgroundComponent } from './experience-your-background.component';

describe('ExperienceYourBackgroundComponent', () => {
  let component: ExperienceYourBackgroundComponent;
  let fixture: ComponentFixture<ExperienceYourBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceYourBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceYourBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
