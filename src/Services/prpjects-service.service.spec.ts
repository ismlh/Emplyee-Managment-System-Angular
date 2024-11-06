import { TestBed } from '@angular/core/testing';

import { PrpjectsServiceService } from './prpjects-service.service';

describe('PrpjectsServiceService', () => {
  let service: PrpjectsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrpjectsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
