import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReAdmissionFormComponent } from './re-admission-form.component';

describe('ReAdmissionFormComponent', () => {
  let component: ReAdmissionFormComponent;
  let fixture: ComponentFixture<ReAdmissionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReAdmissionFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReAdmissionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
