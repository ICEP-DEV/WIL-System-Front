import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WilSubmittedQueryComponent } from './wil-submitted-query.component';

describe('WilSubmittedQueryComponent', () => {
  let component: WilSubmittedQueryComponent;
  let fixture: ComponentFixture<WilSubmittedQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WilSubmittedQueryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WilSubmittedQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
