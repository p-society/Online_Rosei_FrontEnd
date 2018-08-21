import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMessDownComponent } from './admin-mess-down.component';

describe('AdminMessDownComponent', () => {
  let component: AdminMessDownComponent;
  let fixture: ComponentFixture<AdminMessDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMessDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMessDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
