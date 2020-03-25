import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceYourLanguagesComponent } from './experience-your-languages.component';

describe('ExperienceYourLanguagesComponent', () => {
  let component: ExperienceYourLanguagesComponent;
  let fixture: ComponentFixture<ExperienceYourLanguagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceYourLanguagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceYourLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
