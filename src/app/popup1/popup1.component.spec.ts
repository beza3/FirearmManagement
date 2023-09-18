import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Popup1Component } from './popup1.component';

describe('Popup1Component', () => {
  let component: Popup1Component;
  let fixture: ComponentFixture<Popup1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Popup1Component]
    });
    fixture = TestBed.createComponent(Popup1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
