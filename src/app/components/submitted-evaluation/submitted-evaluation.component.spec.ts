import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmittedEvaluationComponent } from './submitted-evaluation.component';

describe('SubmittedEvaluationComponent', () => {
  let component: SubmittedEvaluationComponent;
  let fixture: ComponentFixture<SubmittedEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmittedEvaluationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmittedEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
