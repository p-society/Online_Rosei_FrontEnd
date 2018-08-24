import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateEmailComponent } from './activate-email.component';

describe('ActivateEmailComponent', () => {
  let component: ActivateEmailComponent;
  let fixture: ComponentFixture<ActivateEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivateEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivateEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
