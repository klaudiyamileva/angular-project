export function validatePasswords(form: any) {
    const password = form.value.password;
    const repeatPassword = form.value.repass;
    const passwordsMismatch = password !== repeatPassword;

    const control = form.control.get('repass');
    if (passwordsMismatch) {
        control.setErrors({ mismatch: true });
    } else {
        control.setErrors(null);
    }

    return passwordsMismatch;
}
