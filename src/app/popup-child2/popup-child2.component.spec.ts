import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupChild2Component } from './popup-child2.component';

describe('PopupChild2Component', () => {
  let component: PopupChild2Component;
  let fixture: ComponentFixture<PopupChild2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupChild2Component]
    });
    fixture = TestBed.createComponent(PopupChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
