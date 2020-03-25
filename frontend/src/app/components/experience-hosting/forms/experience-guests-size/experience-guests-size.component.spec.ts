import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceGuestsSizeComponent } from './experience-guests-size.component';

describe('ExperienceGuestsSizeComponent', () => {
  let component: ExperienceGuestsSizeComponent;
  let fixture: ComponentFixture<ExperienceGuestsSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceGuestsSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceGuestsSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
