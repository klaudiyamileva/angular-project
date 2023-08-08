import { Component } from '@angular/core';
import { BlogService } from '../blog.service';
import { BlogsService } from 'src/app/shared/services/blogs.service';

@Component({
    selector: 'app-blog-sort',
    templateUrl: './blog-sort.component.html',
    styleUrls: ['./blog-sort.component.css'],
})
export class BlogSortComponent {
    selectedOption: string = 'newest';

    constructor(
        private blogService: BlogService,
        private blogsService: BlogsService
    ) {}

    onOptionChange(): void {
        if(this.selectedOption === 'newest') {
            this.blogService.getLatestBlogs().subscribe({
                next: (result) => {
                    this.blogsService.setBlogs(result);
                },
                error: (error) => {
                    console.log(error);
                },
            });
        } else {
            this.blogService.getOldestBlogs().subscribe({
                next: (result) => {
                    this.blogsService.setBlogs(result);
                },
                error: (error) => {
                    console.log(error);
                },
            });
        }
    }
}