import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { BlogService } from '../blog.service';
import { Blog } from 'src/app/types/blog';

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
        private blogService: BlogService
    ) {}

    ngOnInit(): void {
        this.blogService.getOldestBlogs().subscribe({
            next: (result) => {
                this.blogs = result;
                console.log(this.blogs);
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
