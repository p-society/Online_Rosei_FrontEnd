import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMessDownUsersComponent } from './admin-mess-down-users.component';

describe('AdminMessDownUsersComponent', () => {
  let component: AdminMessDownUsersComponent;
  let fixture: ComponentFixture<AdminMessDownUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMessDownUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMessDownUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
