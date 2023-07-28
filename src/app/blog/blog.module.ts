import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogCatalogComponent } from './blog-catalog/blog-catalog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogAddComponent } from './blog-add/blog-add.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { BlogLikesComponent } from './blog-likes/blog-likes.component';
import { BlogDeleteComponent } from './blog-delete/blog-delete.component';

@NgModule({
    declarations: [
        BlogCatalogComponent,
        BlogDetailsComponent,
        BlogAddComponent,
        BlogEditComponent,
        BlogLikesComponent,
        BlogDeleteComponent,
    ],
    imports: [CommonModule, RouterModule, FormsModule, BlogRoutingModule],
    exports: [BlogCatalogComponent, BlogDetailsComponent, BlogAddComponent, BlogEditComponent],
})
export class BlogModule {}
