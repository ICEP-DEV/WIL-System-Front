import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessRespondComponent } from './success-respond.component';

describe('SuccessRespondComponent', () => {
  let component: SuccessRespondComponent;
  let fixture: ComponentFixture<SuccessRespondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessRespondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessRespondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
