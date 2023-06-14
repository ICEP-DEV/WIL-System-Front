import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpInformationComponent } from './ep-information.component';

describe('EpInformationComponent', () => {
  let component: EpInformationComponent;
  let fixture: ComponentFixture<EpInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
