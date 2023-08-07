import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { BlogService } from '../blog.service';
import { Blog } from 'src/app/types/blog';
import { BlogsService } from 'src/app/shared/services/blogs.service';

@Component({
    selector: 'app-blog-catalog',
    templateUrl: './blog-catalog.component.html',
    styleUrls: ['./blog-catalog.component.css'],
})
export class BlogCatalogComponent implements OnInit {
    blogs: Blog[] = [];
    areAllBlogsDisplayed: boolean = true;
    allBlogsLength: number = 0;

    constructor(
        private router: Router,
        private authService: AuthService,
        private blogService: BlogService,
        private blogsService: BlogsService
    ) {}

    ngOnInit(): void {
        this.showAllBlogs();

        this.blogsService.blogs$.subscribe((blogs) => {
            this.blogs = blogs;
            this.showBackButton();
        });
    }

    showAllBlogs(): void {
        this.blogService.getLatestBlogs().subscribe({
            next: (result) => {
                this.allBlogsLength = result.length;
                this.blogsService.setBlogs(result);
            },
            error: (error) => {
                console.log(error);
            },
        });
    }

    showBackButton(): void {
        if (this.blogs.length !== 0 && this.blogs.length < this.allBlogsLength) {
            this.areAllBlogsDisplayed = false;
        } else {
            this.areAllBlogsDisplayed = true;
        }
    }

    get isAuth(): boolean {
        return this.authService.isAuthenticated;
    }

    navigateTo(path: string): void {
        if (path === 'blog/add') {
            if (!this.isAuth) {
                this.router.navigate(['login']);
                return;
            }
        }
        this.router.navigate([path]);
    }
}
