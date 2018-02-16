import { TestBed, inject } from '@angular/core/testing';

import { AmiiboService } from './amiibo.service';

describe('AmiiboService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AmiiboService]
    });
  });

  it('should be created', inject([AmiiboService], (service: AmiiboService) => {
    expect(service).toBeTruthy();
  }));
});
