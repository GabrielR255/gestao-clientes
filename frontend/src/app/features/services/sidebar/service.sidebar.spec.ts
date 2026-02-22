import { TestBed } from '@angular/core/testing';

import { ServiceSidebar } from './service.sidebar';

describe('ServiceSidebar', () => {
  let service: ServiceSidebar;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceSidebar);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
