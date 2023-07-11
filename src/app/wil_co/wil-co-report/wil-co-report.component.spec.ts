import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WilCoReportComponent } from './wil-co-report.component';

describe('WilCoReportComponent', () => {
  let component: WilCoReportComponent;
  let fixture: ComponentFixture<WilCoReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WilCoReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WilCoReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
