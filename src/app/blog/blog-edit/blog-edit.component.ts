import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/types/blog';
import { BlogService } from '../blog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-blog-edit',
    templateUrl: './blog-edit.component.html',
    styleUrls: ['./blog-edit.component.css'],
})
export class BlogEditComponent implements OnInit {
    currBlog: Blog | undefined;
    isDataLoaded: boolean = false;
    isOwner: boolean = false;
    blogId: string = '';

    constructor(
        private blogService: BlogService,
        private acticatedRoute: ActivatedRoute,
        private authService: AuthService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.fetchBlog();

    }

    fetchBlog(): void {
        const id = this.acticatedRoute.snapshot.params['blogId'];

        this.blogService.getBlogById(id).subscribe({
            next: (result) => {
                this.currBlog = result;
                this.isDataLoaded = true;

                if(result.user._id === this.authService.authData._id) {
                    this.isOwner = true;
                }

                this.blogId = this.currBlog._id;
            },
            error: (error) => {
                console.log(error);
            },
        });
    }

    submitForm(form: NgForm) {
        if (form.valid) {
            this.blogService.editBlog(this.blogId, form.value).subscribe(() => {
                this.router.navigate([`/blog/${this.blogId}`]);
            });
        }
    }
}
