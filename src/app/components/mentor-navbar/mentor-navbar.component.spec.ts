import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorNavbarComponent } from './mentor-navbar.component';

describe('MentorNavbarComponent', () => {
  let component: MentorNavbarComponent;
  let fixture: ComponentFixture<MentorNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentorNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
