import { TestBed } from '@angular/core/testing';

import { UserPermitServiceService } from './user-permit-service.service';

describe('UserPermitServiceService', () => {
  let service: UserPermitServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserPermitServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
