import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMessUpComponent } from './admin-mess-up.component';

describe('AdminMessUpComponent', () => {
  let component: AdminMessUpComponent;
  let fixture: ComponentFixture<AdminMessUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMessUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMessUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
