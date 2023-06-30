import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRejectComponent } from './admin-reject.component';

describe('AdminRejectComponent', () => {
  let component: AdminRejectComponent;
  let fixture: ComponentFixture<AdminRejectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRejectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminRejectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
