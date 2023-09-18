import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxFormComponent } from './checkbox-form.component';

describe('CheckboxFormComponent', () => {
  let component: CheckboxFormComponent;
  let fixture: ComponentFixture<CheckboxFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckboxFormComponent]
    });
    fixture = TestBed.createComponent(CheckboxFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
