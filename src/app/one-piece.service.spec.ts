import { TestBed } from '@angular/core/testing';

import { OnePieceService } from './one-piece.service';

describe('OnePieceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OnePieceService = TestBed.get(OnePieceService);
    expect(service).toBeTruthy();
  });
});
