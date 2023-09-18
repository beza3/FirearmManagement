import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupChild4Component } from './popup-child4.component';

describe('PopupChild4Component', () => {
  let component: PopupChild4Component;
  let fixture: ComponentFixture<PopupChild4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupChild4Component]
    });
    fixture = TestBed.createComponent(PopupChild4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
