import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BlogService } from '../blog.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-blog-add',
    templateUrl: './blog-add.component.html',
    styleUrls: ['./blog-add.component.css'],
})
export class BlogAddComponent {
    constructor(private blogService: BlogService, private router: Router) {}

    submitForm(form: NgForm) {
        if (form.valid) {
            this.blogService.createBlog(form.value).subscribe(() => {
                this.router.navigate(['/blog']);
            });
        }
    }
}
