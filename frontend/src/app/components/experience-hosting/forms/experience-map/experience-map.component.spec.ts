import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceMapComponent } from './experience-map.component';

describe('ExperienceMapComponent', () => {
  let component: ExperienceMapComponent;
  let fixture: ComponentFixture<ExperienceMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
