import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WilActivitiesComponent } from './wil-activities.component';

describe('WilActivitiesComponent', () => {
  let component: WilActivitiesComponent;
  let fixture: ComponentFixture<WilActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WilActivitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WilActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
