import { Component, Input, OnInit } from '@angular/core';
import { BlogCommentsService } from './blog-comments.service';
import { ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/types/comment';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-blog-comments',
    templateUrl: './blog-comments.component.html',
    styleUrls: ['./blog-comments.component.css'],
})
export class BlogCommentsComponent implements OnInit {
    @Input() isAuth!: boolean;

    id: string = this.acticatedRoute.snapshot.params['blogId'];
    comments: Comment[] = [];

    constructor(
        private commentsService: BlogCommentsService,
        private acticatedRoute: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.loadComments();
    }

    loadComments(): void {
        this.commentsService.getByBlogId(this.id).subscribe({
            next: (result) => {
                this.comments = result;
            },
        });
    }

    onCommentHandler(form: NgForm): void {
        const newComment = {
            comment: form.value.comment,
            blogId: this.id
        }

        if(form.valid) {
            this.onCreateComment(newComment);
        }

        form.reset();
    }

    onCreateComment(newComment: any) {
        this.commentsService.createComment(newComment).subscribe({
            next: () => {
                this.loadComments();
            }
        })
    }
}
