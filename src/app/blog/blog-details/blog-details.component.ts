import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Blog } from 'src/app/types/blog';

@Component({
    selector: 'app-blog-details',
    templateUrl: './blog-details.component.html',
    styleUrls: ['./blog-details.component.css'],
})
export class BlogDetailsComponent implements OnInit {
    blog: Blog | undefined;

    constructor(
        private blogService: BlogService,
        private acticatedRoute: ActivatedRoute,
        private authService: AuthService
    ) {}

    ngOnInit(): void {
        this.fetchBlog();
    }

    get isAuth(): boolean {
        return this.authService.isAuthenticated;
    }

    fetchBlog(): void {
        const id = this.acticatedRoute.snapshot.params['blogId'];
        
        this.blogService.getBlogById(id).subscribe({
            next: (result) => {
                this.blog = result;
                console.log(this.blog);
            },
            error: (error) => {
                console.log(error);
            }
        })
    }

}
