import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeworkComponent } from './changework.component';

describe('ChangeworkComponent', () => {
  let component: ChangeworkComponent;
  let fixture: ComponentFixture<ChangeworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeworkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
