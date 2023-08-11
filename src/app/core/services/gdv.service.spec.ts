import { TestBed } from '@angular/core/testing';

import { GdvService } from './gdv.service';

describe('GdvService', () => {
  let service: GdvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GdvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
