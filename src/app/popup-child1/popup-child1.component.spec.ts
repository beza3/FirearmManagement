import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupChild1Component } from './popup-child1.component';

describe('PopupChild1Component', () => {
  let component: PopupChild1Component;
  let fixture: ComponentFixture<PopupChild1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupChild1Component]
    });
    fixture = TestBed.createComponent(PopupChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
