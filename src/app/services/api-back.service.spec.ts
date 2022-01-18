import { TestBed } from '@angular/core/testing';

import { ApiBackService } from './api-back.service';

describe('ApiBackService', () => {
  let service: ApiBackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiBackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
