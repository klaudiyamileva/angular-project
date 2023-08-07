import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Blog } from '../../types/blog';

@Injectable({
    providedIn: 'root',
})
export class BlogsService {
    private blogsSubject = new BehaviorSubject<Blog[]>([]);
    blogs$ = this.blogsSubject.asObservable();

    setBlogs(blogs: Blog[]) {
        this.blogsSubject.next(blogs);
    }

    getBlogs(): Blog[] {
        return this.blogsSubject.getValue();
    }
}
