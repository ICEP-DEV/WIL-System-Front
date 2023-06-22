import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogEntriesInternalComponent } from './log-entries-internal.component';

describe('LogEntriesInternalComponent', () => {
  let component: LogEntriesInternalComponent;
  let fixture: ComponentFixture<LogEntriesInternalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogEntriesInternalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogEntriesInternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
