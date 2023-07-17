import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WilEvaCowComponent } from './wil-eva-cow.component';

describe('WilEvaCowComponent', () => {
  let component: WilEvaCowComponent;
  let fixture: ComponentFixture<WilEvaCowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WilEvaCowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WilEvaCowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
