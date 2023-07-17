import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WilEvaSuperComponent } from './wil-eva-super.component';

describe('WilEvaSuperComponent', () => {
  let component: WilEvaSuperComponent;
  let fixture: ComponentFixture<WilEvaSuperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WilEvaSuperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WilEvaSuperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
