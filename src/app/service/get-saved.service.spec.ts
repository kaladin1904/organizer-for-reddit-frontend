import { TestBed } from '@angular/core/testing';

import { GetSavedService } from './get-saved.service';

describe('GetSavedService', () => {
  let service: GetSavedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSavedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
