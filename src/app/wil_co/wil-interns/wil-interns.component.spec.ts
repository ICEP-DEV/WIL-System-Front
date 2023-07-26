import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WilInternsComponent } from './wil-interns.component';

describe('WilInternsComponent', () => {
  let component: WilInternsComponent;
  let fixture: ComponentFixture<WilInternsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WilInternsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WilInternsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
