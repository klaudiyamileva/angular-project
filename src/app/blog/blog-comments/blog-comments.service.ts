import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/types/comment';
import * as request from '../../shared/requester';
import { NewComment } from 'src/app/types/newComment';

const baseUrl = 'http://localhost:3030/data/comments';

@Injectable({
    providedIn: 'root',
})
export class BlogCommentsService {
    createComment(commentData: NewComment): Observable<Comment> {
        return request.post(baseUrl, commentData);
    }

    getByBlogId(blogId: string): Observable<Comment[]> {
        const search = encodeURIComponent(`blogId="${blogId}"`);
        const relations = encodeURIComponent('user=_ownerId:users');

        return request.get(`${baseUrl}?where=${search}&load=${relations}`);
    }
}
