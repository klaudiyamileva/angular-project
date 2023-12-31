import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogCatalogComponent } from './blog-catalog/blog-catalog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogAddComponent } from './blog-add/blog-add.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: BlogCatalogComponent,
    },
    {
        path: 'add', 
        component: BlogAddComponent,
    },
    {
        path: ':blogId', 
        component: BlogDetailsComponent,
    },
    {
        path: ':blogId/edit', 
        component: BlogEditComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BlogRoutingModule {}
