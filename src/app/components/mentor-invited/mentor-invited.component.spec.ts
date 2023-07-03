import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorInvitedComponent } from './mentor-invited.component';

describe('MentorInvitedComponent', () => {
  let component: MentorInvitedComponent;
  let fixture: ComponentFixture<MentorInvitedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorInvitedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentorInvitedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
