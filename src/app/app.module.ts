import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ClientsComponent } from './clients/clients.component';
import { OffersComponent } from './offers/offers.component';
import { BlogModule } from './blog/blog.module';
import { UserModule } from './user/user.module';
import { ContactsComponent } from './contacts/contacts.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './shared/services/auth.service';
import { LocalStorageService } from './shared/services/local-storage.service';
import { BlogService } from './blog/blog.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        ClientsComponent,
        OffersComponent,
        ContactsComponent,
        PageNotFoundComponent,
    ],
    imports: [
        BrowserModule,
        CoreModule,
        AppRoutingModule,
        HttpClientModule,
        BlogModule,
        UserModule,
        FormsModule,
    ],
    providers: [AuthService, LocalStorageService, BlogService],
    bootstrap: [AppComponent],
})
export class AppModule {}
