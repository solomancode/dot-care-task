import { TestBed } from '@angular/core/testing';

import { BreadcrumbsFragmentService } from './breadcrumbs-fragment.service';

describe('BreadcrumbsFragmentService', () => {
  let service: BreadcrumbsFragmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BreadcrumbsFragmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
