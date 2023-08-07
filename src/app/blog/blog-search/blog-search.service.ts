import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from 'src/app/types/blog';
import * as request from '../../shared/requester';

const baseUrl = 'http://localhost:3030/data/blogs';

@Injectable({
  providedIn: 'root'
})
export class BlogSearchService {

  searchBlog(searchedBlog: string): Observable<Blog[]> {
    // const search = encodeURIComponent(` LIKE "${searchedBlog}"`);
    // return request.get(`${baseUrl}?where=title${search}`);

    const search = encodeURIComponent(` LIKE "${searchedBlog}"`);
    return request.get(`${baseUrl}?where=title${search} OR category${search}`);
  }
  
}
