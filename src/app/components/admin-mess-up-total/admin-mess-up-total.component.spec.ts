import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMessUpTotalComponent } from './admin-mess-up-total.component';

describe('AdminMessUpTotalComponent', () => {
  let component: AdminMessUpTotalComponent;
  let fixture: ComponentFixture<AdminMessUpTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMessUpTotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMessUpTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
