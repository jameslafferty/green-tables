import { TestBed, inject } from '@angular/core/testing';

import { GreenTableService } from './green-table.service';

describe('GreenTableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GreenTableService]
    });
  });

  it('should be created', inject([GreenTableService], (service: GreenTableService) => {
    expect(service).toBeTruthy();
  }));
});
