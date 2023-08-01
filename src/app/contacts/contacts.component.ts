import { Component } from '@angular/core';
import { ContactsService } from './contacts.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent {
    constructor(
        private contactsService: ContactsService,
        private router: Router,
        private auth: AuthService
    ) {}

    onSubmit(form: NgForm): void {
        if (form.valid) {
            if (this.auth.authData) {
                const ownerId = this.auth.authData._id;

                const contactData = {
                    _ownerId: ownerId,
                    subject: form.value.subject,
                    text: form.value.text,
                };

                this.contactsService.contact(contactData).subscribe({
                    next: () => {
                        this.router.navigate(['/home']);
                    }
                });
            }
        }
    }
}
