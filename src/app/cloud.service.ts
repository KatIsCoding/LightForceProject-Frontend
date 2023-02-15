import { Injectable } from '@angular/core';
import { UserData } from './user.data';

@Injectable({
  providedIn: 'root',
})
export class CloudService {
  userData: UserData = {
    username: '',
    tokens: 0,
  };
  loggedIn: boolean = true;
  constructor() {}

  async login(username: string) {
    // Get userData
    this.loggedIn = true;
    this.userData = {
      username,
      tokens: 0,
    };
  }

  async buyTokens() {
    // Buy tokens for username
    this.userData.tokens++;
  }
}
