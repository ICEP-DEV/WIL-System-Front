import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangementorComponent } from './changementor.component';

describe('ChangementorComponent', () => {
  let component: ChangementorComponent;
  let fixture: ComponentFixture<ChangementorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangementorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangementorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
