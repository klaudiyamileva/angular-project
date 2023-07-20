import { Component } from '@angular/core';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/constants';
import { validatePasswords } from 'src/app/shared/validators/validate-passwords.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  appEmailDomains = DEFAULT_EMAIL_DOMAINS;
  passwordsMismatch = false;

  validatePasswords(form: any) {
    this.passwordsMismatch = validatePasswords(form);
  }
}
