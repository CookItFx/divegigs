import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlogsComponent } from './glogs.component';

describe('GlogsComponent', () => {
  let component: GlogsComponent;
  let fixture: ComponentFixture<GlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
