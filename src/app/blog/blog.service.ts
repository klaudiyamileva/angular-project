import * as request from "../shared/requester";
import { Blog } from "../types/blog";

const baseUrl = 'http://localhost:3030/data/blogs';

export const getOldestBlogs = async (): Promise<Blog[]> => {
  return request.get(baseUrl, null); // Pass null if no data/query parameters needed
};

export const getLatestBlogs = async (): Promise<Blog[]> => {
  const sorted = encodeURIComponent('_createdOn desc');
  return request.get(`${baseUrl}?sortBy=${sorted}`, null); // Pass null if no data/query parameters needed
};

export const getBlogById = async (blogId: string): Promise<Blog> => {
  const relations = encodeURIComponent('user=_ownerId:users');
  return request.get(`${baseUrl}/${blogId}?load=${relations}`, null); // Pass null if no data/query parameters needed
};

export const getBlogByOwnerId = async (ownerId: string): Promise<Blog[]> => {
  const search = encodeURIComponent(`_ownerId="${ownerId}"`);
  return request.get(`${baseUrl}/?where=${search}`, null); // Pass null if no data/query parameters needed
};

export const createBlog = async (blogData: Blog): Promise<Blog> => {
  return request.post(baseUrl, blogData);
};

export const editBlog = async (blogId: string, blogData: Blog): Promise<Blog> => {
  return request.put(`${baseUrl}/${blogId}`, blogData);
};

export const deleteBlog = async (blogId: string): Promise<any> => {
  return request.del(`${baseUrl}/${blogId}`, null); // Pass null if no data/query parameters needed
};