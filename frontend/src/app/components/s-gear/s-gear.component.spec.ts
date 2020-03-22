import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SGearComponent } from './s-gear.component';

describe('SGearComponent', () => {
  let component: SGearComponent;
  let fixture: ComponentFixture<SGearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SGearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SGearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
