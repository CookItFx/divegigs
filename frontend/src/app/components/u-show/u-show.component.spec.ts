import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UShowComponent } from './u-show.component';

describe('UShowComponent', () => {
  let component: UShowComponent;
  let fixture: ComponentFixture<UShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
