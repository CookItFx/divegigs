import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceAboutYouComponent } from './experience-about-you.component';

describe('ExperienceAboutYouComponent', () => {
  let component: ExperienceAboutYouComponent;
  let fixture: ComponentFixture<ExperienceAboutYouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceAboutYouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceAboutYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
