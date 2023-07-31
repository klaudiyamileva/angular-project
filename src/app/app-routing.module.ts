import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OffersComponent } from './offers/offers.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';
import { AuthActivate } from './shared/guards/auth.activate';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

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
        // canActivate: [AuthActivate],
    },
    {
        path: 'blog',
        loadChildren: () =>
            import('./blog/blog-routing.module').then(
                (m) => m.BlogRoutingModule
            ),
    },
    {
        path: '**',
        component: PageNotFoundComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
