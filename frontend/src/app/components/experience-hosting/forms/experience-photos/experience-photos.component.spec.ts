import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencePhotosComponent } from './experience-photos.component';

describe('ExperiencePhotosComponent', () => {
  let component: ExperiencePhotosComponent;
  let fixture: ComponentFixture<ExperiencePhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperiencePhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperiencePhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
