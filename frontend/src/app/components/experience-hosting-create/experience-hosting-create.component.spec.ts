import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceHostingCreateComponent } from './experience-hosting-create.component';

describe('ExperienceHostingCreateComponent', () => {
  let component: ExperienceHostingCreateComponent;
  let fixture: ComponentFixture<ExperienceHostingCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceHostingCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceHostingCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
