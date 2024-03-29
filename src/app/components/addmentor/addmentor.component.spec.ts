import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmentorComponent } from './addmentor.component';

describe('AddmentorComponent', () => {
  let component: AddmentorComponent;
  let fixture: ComponentFixture<AddmentorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmentorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddmentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
