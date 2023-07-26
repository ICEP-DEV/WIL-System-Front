import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternActivitiesComponent } from './intern-activities.component';

describe('InternActivitiesComponent', () => {
  let component: InternActivitiesComponent;
  let fixture: ComponentFixture<InternActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternActivitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
