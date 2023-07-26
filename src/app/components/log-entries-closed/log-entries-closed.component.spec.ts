import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogEntriesClosedComponent } from './log-entries-closed.component';

describe('LogEntriesClosedComponent', () => {
  let component: LogEntriesClosedComponent;
  let fixture: ComponentFixture<LogEntriesClosedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogEntriesClosedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogEntriesClosedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
