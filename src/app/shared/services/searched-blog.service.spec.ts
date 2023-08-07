import { TestBed } from '@angular/core/testing';

import { SearchedBlogService } from './searched-blog.service';

describe('SearchedBlogService', () => {
  let service: SearchedBlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchedBlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
