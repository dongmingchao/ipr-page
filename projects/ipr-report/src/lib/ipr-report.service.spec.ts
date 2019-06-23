import { TestBed } from '@angular/core/testing';

import { IprReportService } from './ipr-report.service';

describe('IprReportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IprReportService = TestBed.get(IprReportService);
    expect(service).toBeTruthy();
  });
});
