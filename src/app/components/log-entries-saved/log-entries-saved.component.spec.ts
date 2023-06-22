import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogEntriesSavedComponent } from './log-entries-saved.component';

describe('LogEntriesSavedComponent', () => {
  let component: LogEntriesSavedComponent;
  let fixture: ComponentFixture<LogEntriesSavedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogEntriesSavedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogEntriesSavedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
