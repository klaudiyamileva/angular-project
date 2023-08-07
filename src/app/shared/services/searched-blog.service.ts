import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Blog } from '../../types/blog';

@Injectable({
  providedIn: 'root'
})
export class SearchedBlogService {
  private searchedBlogsSubject = new BehaviorSubject<Blog[]>([]);
  searchedBlogs$ = this.searchedBlogsSubject.asObservable();

  private searchButtonClickedSubject = new Subject<void>();
  searchButtonClicked$ = this.searchButtonClickedSubject.asObservable();

  setSearchedBlogs(blogs: Blog[]) {
    this.searchedBlogsSubject.next(blogs);
  }

  emitSearchButtonClick() {
    this.searchButtonClickedSubject.next();
  }
}
