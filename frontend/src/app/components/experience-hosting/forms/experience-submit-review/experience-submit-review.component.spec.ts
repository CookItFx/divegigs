import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceSubmitReviewComponent } from './experience-submit-review.component';

describe('ExperienceSubmitReviewComponent', () => {
  let component: ExperienceSubmitReviewComponent;
  let fixture: ComponentFixture<ExperienceSubmitReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceSubmitReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceSubmitReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
