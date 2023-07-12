import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WilRegulationsComponent } from './wil-regulations.component';

describe('WilRegulationsComponent', () => {
  let component: WilRegulationsComponent;
  let fixture: ComponentFixture<WilRegulationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WilRegulationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WilRegulationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
