import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReAdmissionComponent } from './re-admission.component';

describe('ReAdmissionComponent', () => {
  let component: ReAdmissionComponent;
  let fixture: ComponentFixture<ReAdmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReAdmissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReAdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
