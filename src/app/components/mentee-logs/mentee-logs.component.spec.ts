import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenteeLogsComponent } from './mentee-logs.component';

describe('MenteeLogsComponent', () => {
  let component: MenteeLogsComponent;
  let fixture: ComponentFixture<MenteeLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenteeLogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenteeLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
