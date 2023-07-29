import { TestBed } from '@angular/core/testing';

import { BlogCommentsService } from './blog-comments.service';

describe('BlogCommentsService', () => {
  let service: BlogCommentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogCommentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
