import { TestBed } from '@angular/core/testing';

import { FetchSampleService } from './fetch-sample.service';

describe('FetchSampleService', () => {
  let service: FetchSampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchSampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
