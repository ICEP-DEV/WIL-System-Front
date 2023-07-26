import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorSystemSupportComponent } from './mentor-system-support.component';

describe('MentorSystemSupportComponent', () => {
  let component: MentorSystemSupportComponent;
  let fixture: ComponentFixture<MentorSystemSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorSystemSupportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentorSystemSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
