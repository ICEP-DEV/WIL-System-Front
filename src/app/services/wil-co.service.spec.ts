import { TestBed } from '@angular/core/testing';

import { WilCoService } from './wil-co.service';

describe('WilCoService', () => {
  let service: WilCoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WilCoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
