import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRegisterPortalComponent } from './student-register-portal.component';

describe('StudentRegisterPortalComponent', () => {
  let component: StudentRegisterPortalComponent;
  let fixture: ComponentFixture<StudentRegisterPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentRegisterPortalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentRegisterPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
