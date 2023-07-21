import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly authKey = 'auth';

  constructor(private localStorageService: LocalStorageService) {}

  userLogin(authData: any) {
    this.localStorageService.setItem(this.authKey, authData);
  }

  userLogout() {
    this.localStorageService.removeItem(this.authKey);
  }

  get isAuthenticated(): boolean {
    const authData = this.localStorageService.getItem(this.authKey);
    return !!authData && !!authData.accessToken;
  }

  get authData(): any {
    const authData = this.localStorageService.getItem(this.authKey);
    return authData;
  }
}

