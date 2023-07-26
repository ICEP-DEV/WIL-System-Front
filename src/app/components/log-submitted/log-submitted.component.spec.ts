import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogSubmittedComponent } from './log-submitted.component';

describe('LogSubmittedComponent', () => {
  let component: LogSubmittedComponent;
  let fixture: ComponentFixture<LogSubmittedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogSubmittedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogSubmittedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
