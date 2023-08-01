import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as request from '../shared/requester';
import { Contact } from '../types/contact';

const baseUrl = 'http://localhost:3030/data/contacts';

@Injectable({
    providedIn: 'root',
})
export class ContactsService {
    contact(contactData: any): Observable<Contact> {
        return request.post(baseUrl, contactData);
    }
}
