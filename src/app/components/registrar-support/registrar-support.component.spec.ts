import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarSupportComponent } from './registrar-support.component';

describe('RegistrarSupportComponent', () => {
  let component: RegistrarSupportComponent;
  let fixture: ComponentFixture<RegistrarSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarSupportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
