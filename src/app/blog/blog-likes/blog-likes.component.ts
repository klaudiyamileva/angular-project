import { Component, Input, OnInit } from '@angular/core';
import { BlogLikesService } from './blog-likes.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Like } from 'src/app/types/like';
import { User } from 'src/app/types/user';

@Component({
    selector: 'app-blog-likes',
    templateUrl: './blog-likes.component.html',
    styleUrls: ['./blog-likes.component.css'],
})
export class BlogLikesComponent implements OnInit {
    @Input() isAuth!: boolean;
    @Input() isOwner!: boolean;

    likes: Like[] = [];
    likesCount: number = 0;
    isLiked: boolean = false;
    id: string = this.acticatedRoute.snapshot.params['blogId'];

    constructor(
        private likesService: BlogLikesService,
        private acticatedRoute: ActivatedRoute,
        private authService: AuthService
    ) {}

    ngOnInit(): void {
        this.getLikes();
        this.hasLiked();
    }

    getLikes(): void {
        this.likesService.getLikesByBlogId(this.id).subscribe({
            next: (result) => {
                const count = Number(result.length);
                this.likesCount = count;
                this.likes = result;
            },
            error: (error) => {
                console.log(error);
            },
        });
    }

    hasLiked(): void {
        const currUser = this.authService.authData;
        if(currUser) {
            this.likesService.getlikeByUserId(currUser._id).subscribe({
                next: (result) => {
                    if (result.length !== 0) {
                        const hasLiked = result.find(r => r.blogId === this.id);
                        console.log(hasLiked);
                        if (hasLiked) {
                            this.isLiked = true;
                        }
                    }
                },
                error: (error) => {
                    console.log(error);
                }
            })
        }
    }

    likeBlog() {
        if(!this.isLiked) {
            this.likesService.likeBlog(this.id);
            this.likesCount = this.likesCount + 1;
            this.isLiked = true;
        } else {
            return
        }
    }
}
