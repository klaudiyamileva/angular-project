import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/types/blog';
import { BlogService } from '../blog.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
    selector: 'app-blog-edit',
    templateUrl: './blog-edit.component.html',
    styleUrls: ['./blog-edit.component.css'],
})
export class BlogEditComponent implements OnInit {
    currBlog: Blog | undefined;

    blog: any = {
        title: '',
        category: '',
        link: '',
        imageUrl: '',
        content: '',
    };

    constructor(
        private blogService: BlogService,
        private acticatedRoute: ActivatedRoute,
        private authService: AuthService
    ) {}

    ngOnInit(): void {
        this.fetchBlog();
    }

    fetchBlog(): void {
        const id = this.acticatedRoute.snapshot.params['blogId'];
        
        this.blogService.getBlogById(id).subscribe({
            next: (result) => {
                this.currBlog = result;
                // this.user = result.user;
                console.log(this.currBlog);
            },
            error: (error) => {
                console.log(error);
            }
        })
    }

    submitForm(form: any) {
        if (form.valid) {
            // Handle form submission here
            console.log('Form submitted successfully!');
            console.log(this.blog); // Access form data through the blog object
        }
    }
}
