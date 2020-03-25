import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceGuestsBookingComponent } from './experience-guests-booking.component';

describe('ExperienceGuestsBookingComponent', () => {
  let component: ExperienceGuestsBookingComponent;
  let fixture: ComponentFixture<ExperienceGuestsBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceGuestsBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceGuestsBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
