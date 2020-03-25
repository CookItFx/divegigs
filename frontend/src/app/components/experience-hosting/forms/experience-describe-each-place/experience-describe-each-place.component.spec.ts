import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceDescribeEachPlaceComponent } from './experience-describe-each-place.component';

describe('ExperienceDescribeEachPlaceComponent', () => {
  let component: ExperienceDescribeEachPlaceComponent;
  let fixture: ComponentFixture<ExperienceDescribeEachPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceDescribeEachPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceDescribeEachPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
