import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupChild3Component } from './popup-child3.component';

describe('PopupChild3Component', () => {
  let component: PopupChild3Component;
  let fixture: ComponentFixture<PopupChild3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupChild3Component]
    });
    fixture = TestBed.createComponent(PopupChild3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
