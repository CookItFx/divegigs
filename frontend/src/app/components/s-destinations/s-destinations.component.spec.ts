import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SDestinationsComponent } from './s-destinations.component';

describe('SDestinationsComponent', () => {
  let component: SDestinationsComponent;
  let fixture: ComponentFixture<SDestinationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SDestinationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SDestinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
