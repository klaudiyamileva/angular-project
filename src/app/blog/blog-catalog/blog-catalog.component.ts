import { Component, OnInit } from '@angular/core';
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

    constructor(
        private router: Router,
        private authService: AuthService,
        private blogService: BlogService,
        private blogsService: BlogsService
    ) {}

    ngOnInit(): void {
        this.blogsService.blogs$.subscribe((blogs) => {
            this.blogs = blogs;
        });

        this.blogService.getLatestBlogs().subscribe({
            next: (result) => {
                this.blogs = result;
                this.blogsService.setBlogs(result);
            },
            error: (error) => {
                console.log(error);
            },
        });
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
