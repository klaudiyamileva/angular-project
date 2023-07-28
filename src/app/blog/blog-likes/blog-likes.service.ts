import { Injectable } from '@angular/core';
import * as request from '../../shared/requester';
import { Like } from 'src/app/types/like';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3030/data/likes';

@Injectable({
  providedIn: 'root'
})
export class BlogLikesService {

  likeBlog(blogId: string): Observable<Like> {
    return request.post(baseUrl, { blogId });
  }

  getLikesByBlogId(blogId: string): Observable<Like[]> {
    const search = encodeURIComponent(`blogId="${blogId}"`);
    return request.get(`${baseUrl}?where=${search}`);
  }

  getlikeByUserId(userId: string): Observable<Like[]> {
    const search = encodeURIComponent(`_ownerId="${userId}"`);
    return request.get(`${baseUrl}?where=${search}`);
  }

}
