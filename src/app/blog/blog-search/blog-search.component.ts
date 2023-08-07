import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BlogSearchService } from './blog-search.service';
import { BlogsService } from 'src/app/shared/services/blogs.service';

@Component({
    selector: 'app-blog-search',
    templateUrl: './blog-search.component.html',
    styleUrls: ['./blog-search.component.css'],
})
export class BlogSearchComponent {
    isFound: boolean = true;

    constructor(private blogSearch: BlogSearchService, private blogsService: BlogsService) {}

    onSearchSubmit(searchForm: NgForm) {
        const searchedTitle = searchForm.value.search;

        this.blogSearch.searchBlog(searchedTitle).subscribe({
            next: (result) => {
                if (result.length > 0) {
                    this.isFound = true;
                    this.blogsService.setBlogs(result);
                } else {
                    this.isFound = false;
                }
            },
            error: (erorr) => {
                console.log(erorr);
                this.isFound = false;
            },
        });
    }
}
