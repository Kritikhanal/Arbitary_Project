import { TestBed } from '@angular/core/testing';

import { TransportserviceService } from './transportservice.service';

describe('TransportserviceService', () => {
  let service: TransportserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransportserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
