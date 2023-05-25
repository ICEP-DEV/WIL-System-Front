import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementinfoComponent } from './placementinfo.component';

describe('PlacementinfoComponent', () => {
  let component: PlacementinfoComponent;
  let fixture: ComponentFixture<PlacementinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacementinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacementinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
