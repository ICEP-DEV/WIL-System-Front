import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorNotificationComponent } from './mentor-notification.component';

describe('MentorNotificationComponent', () => {
  let component: MentorNotificationComponent;
  let fixture: ComponentFixture<MentorNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorNotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentorNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
