import { Component } from '@angular/core';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/constants';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  appEmailDomains = DEFAULT_EMAIL_DOMAINS;
  passwordsMismatch = false;

  validatePasswords(form: any) {
    const password = form.value.password;
    const repeatPassword = form.value.repass;
    this.passwordsMismatch = password !== repeatPassword;

    const control = form.control.get('repass');
    if (this.passwordsMismatch) {
      control.setErrors({ mismatch: true });
    } else {
      control.setErrors(null);
    }
  }
}
