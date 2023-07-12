import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarApplicantsComponent } from './registrar-applicants.component';

describe('RegistrarApplicantsComponent', () => {
  let component: RegistrarApplicantsComponent;
  let fixture: ComponentFixture<RegistrarApplicantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarApplicantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarApplicantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
