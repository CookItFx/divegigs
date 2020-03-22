import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceHostingComponent } from './experience-hosting.component';

describe('ExperienceHostingComponent', () => {
  let component: ExperienceHostingComponent;
  let fixture: ComponentFixture<ExperienceHostingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceHostingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceHostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
