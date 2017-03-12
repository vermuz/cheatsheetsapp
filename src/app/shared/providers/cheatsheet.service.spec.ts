import { TestBed, inject } from '@angular/core/testing';

import { CheatsheetService } from './cheatsheet.service';

describe('CheatsheetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheatsheetService]
    });
  });

  it('should ...', inject([CheatsheetService], (service: CheatsheetService) => {
    expect(service).toBeTruthy();
  }));
});
