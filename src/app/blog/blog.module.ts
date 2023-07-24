import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogCatalogComponent } from './blog-catalog/blog-catalog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogAddComponent } from './blog-add/blog-add.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        BlogCatalogComponent,
        BlogDetailsComponent,
        BlogAddComponent,
    ],
    imports: [CommonModule, RouterModule, FormsModule],
    exports: [BlogCatalogComponent, BlogDetailsComponent, BlogAddComponent],
})
export class BlogModule {}
