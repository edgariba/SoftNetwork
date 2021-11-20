import { TestBed } from '@angular/core/testing';

import { CommonAlertsService } from './common-alerts.service';

describe('CommonAlertsService', () => {
  let service: CommonAlertsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonAlertsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
