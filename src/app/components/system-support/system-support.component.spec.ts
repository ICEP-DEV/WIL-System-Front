import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemSupportComponent } from './system-support.component';

describe('SystemSupportComponent', () => {
  let component: SystemSupportComponent;
  let fixture: ComponentFixture<SystemSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemSupportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
