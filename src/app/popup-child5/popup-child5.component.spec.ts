import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupChild5Component } from './popup-child5.component';

describe('PopupChild5Component', () => {
  let component: PopupChild5Component;
  let fixture: ComponentFixture<PopupChild5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupChild5Component]
    });
    fixture = TestBed.createComponent(PopupChild5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
