import { TestBed } from '@angular/core/testing';

import { InventoryLocalQueryService } from './inventory-local-query.service';

describe('InventoryLocalQueryService', () => {
  let service: InventoryLocalQueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventoryLocalQueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
