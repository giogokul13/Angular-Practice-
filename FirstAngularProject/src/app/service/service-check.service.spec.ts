import { TestBed } from '@angular/core/testing';

import { ServiceCheckService } from './service-check.service';

describe('ServiceCheckService', () => {
  let service: ServiceCheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceCheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
