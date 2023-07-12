import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorActivitiesComponent } from './mentor-activities.component';

describe('MentorActivitiesComponent', () => {
  let component: MentorActivitiesComponent;
  let fixture: ComponentFixture<MentorActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorActivitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentorActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
