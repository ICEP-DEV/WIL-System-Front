import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogRejectedComponent } from './log-rejected.component';

describe('LogRejectedComponent', () => {
  let component: LogRejectedComponent;
  let fixture: ComponentFixture<LogRejectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogRejectedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogRejectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
