import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OffersComponent } from './offers/offers.component';
import { BlogCatalogComponent } from './blog/blog-catalog/blog-catalog.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';
import { BlogAddComponent } from './blog/blog-add/blog-add.component';
import { AuthActivate } from './shared/guards/auth.activate';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home',
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'about',
        component: AboutComponent,
    },
    {
        path: 'offers',
        component: OffersComponent,
    },
    {
        path: 'contact',
        component: ContactsComponent,
        // canActivate: [AuthActivate],
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'register',
        component: RegisterComponent,
    },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthActivate],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
