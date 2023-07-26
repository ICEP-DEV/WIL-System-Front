import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternlifeComponent } from './internlife.component';

describe('InternlifeComponent', () => {
  let component: InternlifeComponent;
  let fixture: ComponentFixture<InternlifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternlifeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternlifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
