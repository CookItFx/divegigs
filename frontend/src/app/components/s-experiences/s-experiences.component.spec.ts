import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SExperiencesComponent } from './s-experiences.component';

describe('SExperiencesComponent', () => {
  let component: SExperiencesComponent;
  let fixture: ComponentFixture<SExperiencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SExperiencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
