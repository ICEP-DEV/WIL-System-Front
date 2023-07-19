import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarSaveComponent } from './registrar-save.component';

describe('RegistrarSaveComponent', () => {
  let component: RegistrarSaveComponent;
  let fixture: ComponentFixture<RegistrarSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarSaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
