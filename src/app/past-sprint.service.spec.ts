import { TestBed, inject } from '@angular/core/testing';

import { PastSprintService } from './past-sprint.service';

describe('PastSprintService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PastSprintService]
    });
  });

  it('should be created', inject([PastSprintService], (service: PastSprintService) => {
    expect(service).toBeTruthy();
  }));
});
