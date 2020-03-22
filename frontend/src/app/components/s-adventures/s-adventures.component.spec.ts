import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SAdventuresComponent } from './s-adventures.component';

describe('SAdventuresComponent', () => {
  let component: SAdventuresComponent;
  let fixture: ComponentFixture<SAdventuresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SAdventuresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SAdventuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
