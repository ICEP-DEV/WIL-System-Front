import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarViewComponent } from './registrar-view.component';

describe('RegistrarViewComponent', () => {
  let component: RegistrarViewComponent;
  let fixture: ComponentFixture<RegistrarViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
