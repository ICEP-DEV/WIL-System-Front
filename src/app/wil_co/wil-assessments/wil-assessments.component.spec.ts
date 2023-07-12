import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WilAssessmentsComponent } from './wil-assessments.component';

describe('WilAssessmentsComponent', () => {
  let component: WilAssessmentsComponent;
  let fixture: ComponentFixture<WilAssessmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WilAssessmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WilAssessmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
