import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/blog/blog.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Blog } from 'src/app/types/blog';
import { UserProfile } from 'src/app/types/userProfile';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
    blogs: Blog[] = [];
    
    constructor(private authService: AuthService, private blogService: BlogService) {}

    get userInfo(): UserProfile {
        return this.authService.authData;
    }

    get isAuth(): boolean {
        return this.authService.isAuthenticated;
    }

    getUserBlogs(): void {
        this.blogService.getBlogByOwnerId(this.userInfo._id).subscribe({
            next: (result) => {
                this.blogs = result;
            }
        })
    }

    ngOnInit(): void {
        this.getUserBlogs();
    }
}
