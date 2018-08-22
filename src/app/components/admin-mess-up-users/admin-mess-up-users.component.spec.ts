import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMessUpUsersComponent } from './admin-mess-up-users.component';

describe('AdminMessUpUsersComponent', () => {
  let component: AdminMessUpUsersComponent;
  let fixture: ComponentFixture<AdminMessUpUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMessUpUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMessUpUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
