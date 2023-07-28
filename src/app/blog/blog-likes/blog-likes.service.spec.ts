import { TestBed } from '@angular/core/testing';

import { BlogLikesService } from './blog-likes.service';

describe('BlogLikesService', () => {
  let service: BlogLikesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogLikesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
