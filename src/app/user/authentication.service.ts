import { Injectable } from '@angular/core';
import { post, get } from '../shared/requester';
import { Observable, from, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const baseUrl = 'http://localhost:3030';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor() {}

  login(email: string, username: string, password: string): Observable<any> {
    return post(`${baseUrl}/users/login`, { email, username, password }).pipe(
      map((response: any) => {
        const authData = {
          accessToken: response.accessToken,
          email: response.email,
          username: response.username,
        };
        return authData;
      }),
      catchError((error) => {
        console.log(error);
        throw error;
      })
    );
  }

  logout(accessToken: string): Observable<Response> {
    const url = `${baseUrl}/users/logout`;

    // Assuming you have a custom 'get' function for making HTTP GET requests using RxJS
    return from(
      fetch(url, {
        headers: {
          'X-Authorization': accessToken,
        },
      })
    ).pipe(
      catchError((error) => {
        console.log(error);
        return throwError(error);
      })
    );
  }

  register(email: string, username: string, password: string): Observable<any> {
    return post(`${baseUrl}/users/register`, {
      email,
      username,
      password,
    }).pipe(
      map((response: any) => {
        const authData = {
          accessToken: response.accessToken,
          email: response.email,
          username: response.username,
        };
        return authData;
      }),
      catchError((error) => {
        console.log(error);
        throw error;
      })
    );
  }
}
