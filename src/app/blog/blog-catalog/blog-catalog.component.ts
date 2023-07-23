import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-blog-catalog',
  templateUrl: './blog-catalog.component.html',
  styleUrls: ['./blog-catalog.component.css']
})
export class BlogCatalogComponent {

  constructor(private router: Router, private authService: AuthService) {}

  get isAuth(): boolean {
    return this.authService.isAuthenticated;
  }

  navigateTo(path: string): void {
    if(path === 'blog/add') {
      if(!this.isAuth) {
        this.router.navigate(['login']);
        return
      }
    }
    this.router.navigate([path]);
  }


}
