import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpCommunitiesComponent } from './help-communities.component';

describe('HelpCommunitiesComponent', () => {
  let component: HelpCommunitiesComponent;
  let fixture: ComponentFixture<HelpCommunitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpCommunitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpCommunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
