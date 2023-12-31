import { ValidatorFn } from '@angular/forms';

export function emailValidator(domains: string[]): ValidatorFn {
    const domainString = domains.join('|');
    const regExp = new RegExp(
        `[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.(${domainString})`,
    );

    return (control) => {
        return control.value === '' || regExp.test(control.value)
            ? null
            : { emailValidator: true };
    };
}
