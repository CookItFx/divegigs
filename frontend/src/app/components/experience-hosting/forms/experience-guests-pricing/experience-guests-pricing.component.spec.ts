import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceGuestsPricingComponent } from './experience-guests-pricing.component';

describe('ExperienceGuestsPricingComponent', () => {
  let component: ExperienceGuestsPricingComponent;
  let fixture: ComponentFixture<ExperienceGuestsPricingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceGuestsPricingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceGuestsPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
