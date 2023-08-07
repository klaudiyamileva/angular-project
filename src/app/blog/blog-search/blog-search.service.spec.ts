import { TestBed } from '@angular/core/testing';

import { BlogSearchService } from './blog-search.service';

describe('BlogSearchService', () => {
  let service: BlogSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
