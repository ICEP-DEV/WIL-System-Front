import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemDocumentationComponent } from './system-documentation.component';

describe('SystemDocumentationComponent', () => {
  let component: SystemDocumentationComponent;
  let fixture: ComponentFixture<SystemDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemDocumentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
