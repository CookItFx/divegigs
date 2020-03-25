import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceNotesComponent } from './experience-notes.component';

describe('ExperienceNotesComponent', () => {
  let component: ExperienceNotesComponent;
  let fixture: ComponentFixture<ExperienceNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
