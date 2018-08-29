import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCouponsComponent } from './edit-coupons.component';

describe('EditCouponsComponent', () => {
  let component: EditCouponsComponent;
  let fixture: ComponentFixture<EditCouponsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCouponsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
