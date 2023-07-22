import { Injectable } from '@angular/core';
import { post } from '../shared/requester';

const baseUrl = 'http://localhost:3030';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor() {}

  login(email: string, username: string, password: string) {
    return post(`${baseUrl}/users/login`, { email, username, password });
  }

  async logout(accessToken: string): Promise<Response> {
    try {
      const response = await fetch(`${baseUrl}/users/logout`, {
        headers: {
          'X-Authorization': accessToken,
        },
      });

      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  register(email: string, username: string, password: string) {
    return post(`${baseUrl}/users/register`, { email, username, password })
      .then((response) => {
        const authData = {
          accessToken: response.accessToken,
          email: response.email,
          username: response.username,
          _id: response._id,
        };
        return authData;
      });
  }
}
