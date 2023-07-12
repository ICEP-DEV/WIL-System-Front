import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WilTopnavComponent } from './wil-topnav.component';

describe('WilTopnavComponent', () => {
  let component: WilTopnavComponent;
  let fixture: ComponentFixture<WilTopnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WilTopnavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WilTopnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
