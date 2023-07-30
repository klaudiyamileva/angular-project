import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/constants';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent {
    appEmailDomains = DEFAULT_EMAIL_DOMAINS;
    errorMessage: string = '';

    constructor(
        private authenticationService: AuthenticationService,
        private authService: AuthService,
        private router: Router
    ) {}

    onSubmit(form: NgForm): void {
        if (form.valid) {
            const email = form.value.email;
            const username = form.value.username;
            const password = form.value.password;

            this.authenticationService
                .login(email, username, password)
                .subscribe({
                    next: (authData: any) => {
                        this.authService.userLogin(authData);
                        this.router.navigate(['/home']);
                    },
                    error: (error) => {
                        const errorData = JSON.parse(error.message || {});
                        if (errorData.code === 403) {
                            this.errorMessage = errorData.message;
                        } else {
                            this.router.navigate(['/login']);
                        }
                    },
                });
        }
    }
}
