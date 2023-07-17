import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogApprovedComponent } from './log-approved.component';

describe('LogApprovedComponent', () => {
  let component: LogApprovedComponent;
  let fixture: ComponentFixture<LogApprovedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogApprovedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
