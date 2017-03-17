import { TestBed, inject } from '@angular/core/testing';

import { CheatsheetResolveService } from './cheatsheet-resolve.service';

describe('CheatsheetResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheatsheetResolveService]
    });
  });

  it('should ...', inject([CheatsheetResolveService], (service: CheatsheetResolveService) => {
    expect(service).toBeTruthy();
  }));
});
