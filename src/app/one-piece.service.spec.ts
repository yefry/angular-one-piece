import { TestBed } from '@angular/core/testing';

import { OnePieceService } from './one-piece.service';
import { HttpClientModule } from '@angular/common/http';

describe('OnePieceService', () => {
  beforeEach(() => TestBed.configureTestingModule({imports: [HttpClientModule]}));

  it('should be created', () => {
    const service: OnePieceService = TestBed.get(OnePieceService);
    expect(service).toBeTruthy();
  });
});
