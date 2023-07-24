import { Blog } from '../types/blog';
import * as request from '../shared/requester';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3030/data/blogs';

export class BlogService {
    getOldestBlogs(): Observable<Blog[]> {
        return request.get(baseUrl);
    }

    getLatestBlogs(): Observable<Blog[]> {
        const sorted = encodeURIComponent('_createdOn desc');
        return request.get(`${baseUrl}?sortBy=${sorted}`);
    }

    getBlogById(blogId: string): Observable<Blog> {
        const relations = encodeURIComponent('user=_ownerId:users');
        return request.get(`${baseUrl}/${blogId}?load=${relations}`);
    }

    getBlogByOwnerId(ownerId: string): Observable<Blog[]> {
        const search = encodeURIComponent(`_ownerId="${ownerId}"`);
        return request.get(`${baseUrl}/?where=${search}`);
    }

    createBlog(blogData: Blog): Observable<Blog> {
        return request.post(baseUrl, blogData);
    }

    editBlog(blogId: string, blogData: Blog): Observable<Blog> {
        return request.put(`${baseUrl}/${blogId}`, blogData);
    }

    deleteBlog(blogId: string): Observable<any> {
        return request.del(`${baseUrl}/${blogId}`);
    }
}
