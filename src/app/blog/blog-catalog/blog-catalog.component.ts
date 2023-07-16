import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-catalog',
  templateUrl: './blog-catalog.component.html',
  styleUrls: ['./blog-catalog.component.css']
})
export class BlogCatalogComponent {

  constructor(private router: Router) {}

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}
