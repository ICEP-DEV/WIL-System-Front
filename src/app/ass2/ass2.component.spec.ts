import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ass2Component } from './ass2.component';

describe('Ass2Component', () => {
  let component: Ass2Component;
  let fixture: ComponentFixture<Ass2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ass2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ass2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
