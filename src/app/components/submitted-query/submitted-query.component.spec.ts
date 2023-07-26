import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmittedQueryComponent } from './submitted-query.component';

describe('SubmittedQueryComponent', () => {
  let component: SubmittedQueryComponent;
  let fixture: ComponentFixture<SubmittedQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmittedQueryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmittedQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
