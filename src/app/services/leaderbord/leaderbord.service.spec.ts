import { TestBed } from '@angular/core/testing';

import { LeaderbordService } from './leaderbord.service';

describe('LeaderbordService', () => {
  let service: LeaderbordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeaderbordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
