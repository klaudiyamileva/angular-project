import { Component } from '@angular/core';
import { BlogService } from '../blog.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-blog-delete',
    templateUrl: './blog-delete.component.html',
    styleUrls: ['./blog-delete.component.css'],
})
export class BlogDeleteComponent {
    isDeleteClicked: boolean = false;

    constructor(
      private blogService: BlogService,
      private acticatedRoute: ActivatedRoute,
      // private authService: AuthService,
      private router: Router
  ) {}

    deleteClickHandler(): void {
        this.isDeleteClicked = true;
    }

    cancelDeleteHandler(): void {
        this.isDeleteClicked = false;
    }

    deleteBlog() {
        const id = this.acticatedRoute.snapshot.params['blogId'];

        this.blogService.deleteBlog(id).subscribe({
            next: () => {
                this.router.navigate([`/blog`]);
            },
            error: (error) => {
                console.log(error);
            },
        });
    }
}
