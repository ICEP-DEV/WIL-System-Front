import { TestBed } from '@angular/core/testing';

import { WilService } from './wil.service';

describe('WilService', () => {
  let service: WilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
