import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/constants';
import { validatePasswords } from 'src/app/shared/validators/validate-passwords.validator';
import { AuthenticationService } from '../authentication.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  appEmailDomains = DEFAULT_EMAIL_DOMAINS;
  passwordsMismatch = false;

  constructor(private authenticationService: AuthenticationService, private authService: AuthService, private router: Router) {}

  validatePasswords(form: any) {
    this.passwordsMismatch = validatePasswords(form);
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      const email = form.value.email;
      const username = form.value.username;
      const password = form.value.password;

      this.authenticationService.register(email, username, password)
        .then((response) => {
          this.authService.userLogin(response);
          this.router.navigate(['/home']); 
        })
        .catch((error) => {
          console.error('Register error:', error);
          this.router.navigate(['/register']); 
        });
    }
  }
}
