import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceWhatIWillProvideComponent } from './experience-what-iwill-provide.component';

describe('ExperienceWhatIWillProvideComponent', () => {
  let component: ExperienceWhatIWillProvideComponent;
  let fixture: ComponentFixture<ExperienceWhatIWillProvideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceWhatIWillProvideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceWhatIWillProvideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
