import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WilSystemSuppComponent } from './wil-system-supp.component';

describe('WilSystemSuppComponent', () => {
  let component: WilSystemSuppComponent;
  let fixture: ComponentFixture<WilSystemSuppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WilSystemSuppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WilSystemSuppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
