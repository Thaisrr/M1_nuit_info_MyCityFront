import { TestBed } from '@angular/core/testing';

import { ReptilianService } from '../reptilian.service';

describe('ReptilianService', () => {
  let service: ReptilianService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReptilianService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
