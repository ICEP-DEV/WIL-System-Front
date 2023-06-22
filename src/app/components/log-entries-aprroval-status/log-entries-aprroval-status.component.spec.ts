import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogEntriesAprrovalStatusComponent } from './log-entries-aprroval-status.component';

describe('LogEntriesAprrovalStatusComponent', () => {
  let component: LogEntriesAprrovalStatusComponent;
  let fixture: ComponentFixture<LogEntriesAprrovalStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogEntriesAprrovalStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogEntriesAprrovalStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
