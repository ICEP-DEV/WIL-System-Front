import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WILRegistrationComponent } from './wil-registration.component';

describe('WILRegistrationComponent', () => {
  let component: WILRegistrationComponent;
  let fixture: ComponentFixture<WILRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WILRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WILRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
