import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceWhatWillYouDoComponent } from './experience-what-will-you-do.component';

describe('ExperienceWhatWillYouDoComponent', () => {
  let component: ExperienceWhatWillYouDoComponent;
  let fixture: ComponentFixture<ExperienceWhatWillYouDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceWhatWillYouDoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceWhatWillYouDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
