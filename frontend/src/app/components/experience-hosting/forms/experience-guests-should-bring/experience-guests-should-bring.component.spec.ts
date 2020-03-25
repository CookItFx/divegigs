import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceGuestsShouldBringComponent } from './experience-guests-should-bring.component';

describe('ExperienceGuestsShouldBringComponent', () => {
  let component: ExperienceGuestsShouldBringComponent;
  let fixture: ComponentFixture<ExperienceGuestsShouldBringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceGuestsShouldBringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceGuestsShouldBringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
