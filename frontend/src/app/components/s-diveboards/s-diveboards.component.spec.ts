import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SDiveboardsComponent } from './s-diveboards.component';

describe('SDiveboardsComponent', () => {
  let component: SDiveboardsComponent;
  let fixture: ComponentFixture<SDiveboardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SDiveboardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SDiveboardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
