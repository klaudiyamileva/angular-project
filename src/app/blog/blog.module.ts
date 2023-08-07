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
import { BlogCommentsComponent } from './blog-comments/blog-comments.component';
import { BlogSearchComponent } from './blog-search/blog-search.component';

@NgModule({
    declarations: [
        BlogCatalogComponent,
        BlogDetailsComponent,
        BlogAddComponent,
        BlogEditComponent,
        BlogLikesComponent,
        BlogDeleteComponent,
        BlogCommentsComponent,
        BlogSearchComponent,
    ],
    imports: [CommonModule, RouterModule, FormsModule, BlogRoutingModule],
    exports: [BlogCatalogComponent, BlogDetailsComponent, BlogAddComponent, BlogEditComponent],
})
export class BlogModule {}
