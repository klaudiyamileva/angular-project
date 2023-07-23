import { Blog } from '../types/blog';
import * as request from '../shared/requester';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3030/data/blogs';

export const getOldestBlogs = (): Observable<Blog[]> => {
  return request.get(baseUrl);
};

export const getLatestBlogs = (): Observable<Blog[]> => {
  const sorted = encodeURIComponent('_createdOn desc');
  return request.get(`${baseUrl}?sortBy=${sorted}`);
};

export const getBlogById = (blogId: string): Observable<Blog> => {
  const relations = encodeURIComponent('user=_ownerId:users');
  return request.get(`${baseUrl}/${blogId}?load=${relations}`);
};

export const getBlogByOwnerId = (ownerId: string): Observable<Blog[]> => {
  const search = encodeURIComponent(`_ownerId="${ownerId}"`);
  return request.get(`${baseUrl}/?where=${search}`);
};

export const createBlog = (blogData: Blog): Observable<Blog> => {
  return request.post(baseUrl, blogData);
};

export const editBlog = (blogId: string, blogData: Blog): Observable<Blog> => {
  return request.put(`${baseUrl}/${blogId}`, blogData);
};

export const deleteBlog = (blogId: string): Observable<any> => {
  return request.del(`${baseUrl}/${blogId}`);
};
