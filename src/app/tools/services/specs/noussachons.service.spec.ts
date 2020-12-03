import { TestBed } from '@angular/core/testing';

import { NoussachonsService } from '../noussachons.service';

describe('NoussachonsService', () => {
  let service: NoussachonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoussachonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
