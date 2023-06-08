import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysDocSubmittedComponent } from './sys-doc-submitted.component';

describe('SysDocSubmittedComponent', () => {
  let component: SysDocSubmittedComponent;
  let fixture: ComponentFixture<SysDocSubmittedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysDocSubmittedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SysDocSubmittedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
