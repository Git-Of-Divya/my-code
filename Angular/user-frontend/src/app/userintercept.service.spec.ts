import { TestBed } from '@angular/core/testing';

import { UserinterceptService } from './userintercept.service';

describe('UserinterceptService', () => {
  let service: UserinterceptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserinterceptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
