import { TestBed } from '@angular/core/testing';

import { DashBoardSerService } from './dash-board-ser.service';

describe('DashBoardSerService', () => {
  let service: DashBoardSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashBoardSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
