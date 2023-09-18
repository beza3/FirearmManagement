import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthTabComponent } from './fourth-tab.component';

describe('FourthTabComponent', () => {
  let component: FourthTabComponent;
  let fixture: ComponentFixture<FourthTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FourthTabComponent]
    });
    fixture = TestBed.createComponent(FourthTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
