import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkPlaceSavedComponent } from './work-place-saved.component';

describe('WorkPlaceSavedComponent', () => {
  let component: WorkPlaceSavedComponent;
  let fixture: ComponentFixture<WorkPlaceSavedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkPlaceSavedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkPlaceSavedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
