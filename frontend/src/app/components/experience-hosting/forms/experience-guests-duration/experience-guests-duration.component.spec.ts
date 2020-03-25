import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceGuestsDurationComponent } from './experience-guests-duration.component';

describe('ExperienceGuestsDurationComponent', () => {
  let component: ExperienceGuestsDurationComponent;
  let fixture: ComponentFixture<ExperienceGuestsDurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceGuestsDurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceGuestsDurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
