import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WilHomeComponent } from './wil-home.component';

describe('WilHomeComponent', () => {
  let component: WilHomeComponent;
  let fixture: ComponentFixture<WilHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WilHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WilHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
