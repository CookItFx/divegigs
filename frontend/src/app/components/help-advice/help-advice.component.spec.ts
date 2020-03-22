import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpAdviceComponent } from './help-advice.component';

describe('HelpAdviceComponent', () => {
  let component: HelpAdviceComponent;
  let fixture: ComponentFixture<HelpAdviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpAdviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpAdviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
