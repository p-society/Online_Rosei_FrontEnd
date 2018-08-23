import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMessDownTotalComponent } from './admin-mess-down-total.component';

describe('AdminMessDownTotalComponent', () => {
  let component: AdminMessDownTotalComponent;
  let fixture: ComponentFixture<AdminMessDownTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMessDownTotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMessDownTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
