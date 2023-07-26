import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorInvitesComponent } from './mentor-invites.component';

describe('MentorInvitesComponent', () => {
  let component: MentorInvitesComponent;
  let fixture: ComponentFixture<MentorInvitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorInvitesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentorInvitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
