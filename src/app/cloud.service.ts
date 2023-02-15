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

  async uploadScore(score: number) {
    // Make API Call to store user's score
  }

  async startGame() {
    // Make API Call to check if game can be started
    return true;
  }

  async buyTokens() {
    // Buy tokens for username
    this.userData.tokens++;
  }
}
