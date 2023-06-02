import { TestBed } from '@angular/core/testing';

import { LogEntriesService } from './log-entries.service';

describe('LogEntriesService', () => {
  let service: LogEntriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogEntriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
