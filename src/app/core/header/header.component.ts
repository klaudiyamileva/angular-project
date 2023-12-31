import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { AuthenticationService } from 'src/app/user/authentication.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
    constructor(
        private authenticationService: AuthenticationService,
        private authService: AuthService,
        private router: Router,
    ) {}

    logout(): void {
        const auth = this.authService.authData;
        this.authenticationService.logout(auth.accessToken).subscribe(
            (response: any) => {
                this.authService.userLogout();
                this.router.navigate(['/home']);
            },
            (error) => {
                console.log('Logout Error:', error);
                this.router.navigate(['/home']);
            },
        );
    }

    isAuth(): boolean {
        return this.authService.isAuthenticated;
    }
}
