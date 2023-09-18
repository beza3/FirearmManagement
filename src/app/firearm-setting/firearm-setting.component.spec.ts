import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirearmSettingComponent } from './firearm-setting.component';

describe('FirearmSettingComponent', () => {
  let component: FirearmSettingComponent;
  let fixture: ComponentFixture<FirearmSettingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirearmSettingComponent]
    });
    fixture = TestBed.createComponent(FirearmSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
