import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenteeRatingComponent } from './mentee-rating.component';

describe('MenteeRatingComponent', () => {
  let component: MenteeRatingComponent;
  let fixture: ComponentFixture<MenteeRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenteeRatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenteeRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
