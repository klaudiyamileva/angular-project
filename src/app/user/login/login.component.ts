import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/constants';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  appEmailDomains = DEFAULT_EMAIL_DOMAINS;

  constructor(private authenticationService: AuthenticationService, private authService: AuthService, private router: Router) {}

  onSubmit(form: NgForm): void {
    if (form.valid) {
      const email = form.value.email;
      const username = form.value.username;
      const password = form.value.password;

      this.authenticationService.login(email, username, password)
        .then((response) => {
          this.authService.userLogin(response);
          this.router.navigate(['/home']); 
        })
        .catch((error) => {
          console.error('Login error:', error);
          this.router.navigate(['/login']); 
        });
    }
  }
}
