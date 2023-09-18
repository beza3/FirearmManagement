import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupChild6Component } from './popup-child6.component';

describe('PopupChild6Component', () => {
  let component: PopupChild6Component;
  let fixture: ComponentFixture<PopupChild6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupChild6Component]
    });
    fixture = TestBed.createComponent(PopupChild6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
