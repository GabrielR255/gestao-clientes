import { TestBed } from '@angular/core/testing';

import { ServiceEditclient } from './service.editclient';

describe('ServiceEditclient', () => {
  let service: ServiceEditclient;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceEditclient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
