import { TestBed } from '@angular/core/testing';

import { UserLocationSvcService } from './user-location-svc.service';

describe('UserLocationSvcService', () => {
  let service: UserLocationSvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserLocationSvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
