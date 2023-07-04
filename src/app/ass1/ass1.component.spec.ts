import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ass1Component } from './ass1.component';

describe('Ass1Component', () => {
  let component: Ass1Component;
  let fixture: ComponentFixture<Ass1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ass1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ass1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
