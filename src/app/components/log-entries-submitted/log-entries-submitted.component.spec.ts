import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogEntriesSubmittedComponent } from './log-entries-submitted.component';

describe('LogEntriesSubmittedComponent', () => {
  let component: LogEntriesSubmittedComponent;
  let fixture: ComponentFixture<LogEntriesSubmittedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogEntriesSubmittedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogEntriesSubmittedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
