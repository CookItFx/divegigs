import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceTitleComponent } from './experience-title.component';

describe('ExperienceTitleComponent', () => {
  let component: ExperienceTitleComponent;
  let fixture: ComponentFixture<ExperienceTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
