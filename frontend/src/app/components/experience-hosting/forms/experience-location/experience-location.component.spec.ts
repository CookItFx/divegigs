import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceLocationComponent } from './experience-location.component';

describe('ExperienceLocationComponent', () => {
  let component: ExperienceLocationComponent;
  let fixture: ComponentFixture<ExperienceLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
