import { TestBed } from '@angular/core/testing';

import { JokeApi } from './joke-api';

describe('JokeApi', () => {
  let service: JokeApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JokeApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
