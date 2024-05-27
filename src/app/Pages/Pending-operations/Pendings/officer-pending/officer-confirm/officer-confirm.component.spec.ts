import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerConfirmComponent } from './officer-confirm.component';

describe('OfficerConfirmComponent', () => {
  let component: OfficerConfirmComponent;
  let fixture: ComponentFixture<OfficerConfirmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfficerConfirmComponent]
    });
    fixture = TestBed.createComponent(OfficerConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
