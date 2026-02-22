import { TestBed } from '@angular/core/testing';

import { ListclientsService } from './listclients.service';

describe('ListclientsService', () => {
  let service: ListclientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListclientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
