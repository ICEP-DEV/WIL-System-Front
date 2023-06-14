import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementLetterComponent } from './placement-letter.component';

describe('PlacementLetterComponent', () => {
  let component: PlacementLetterComponent;
  let fixture: ComponentFixture<PlacementLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacementLetterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacementLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
