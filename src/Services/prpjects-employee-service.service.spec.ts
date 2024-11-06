import { TestBed } from '@angular/core/testing';

import { PrpjectsEmployeeServiceService } from './prpjects-employee-service.service';

describe('PrpjectsEmployeeServiceService', () => {
  let service: PrpjectsEmployeeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrpjectsEmployeeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
