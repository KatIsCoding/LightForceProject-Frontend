import { Injectable } from '@angular/core';
import { UserData } from './user.data';
import { HttpClient } from '@angular/common/http';
import { enviroment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CloudService {
  userData: UserData = {
    username: '',
    tokens: 0,
    ledge: [],
  };
  price = 0;
  loggedIn: boolean = false;

  private baseUrl = enviroment.baseUrl;

  constructor(private http: HttpClient) {}

  async login(username: string) {
    // Get userData
    this.loggedIn = true;
    this.userData = {
      username,
      tokens: 0,
      ledge: [
        {
          description: 'Played game',
          debit: 4,
          credit: 0,
        },
        {
          description: 'Played game',
          debit: 4,
          credit: 0,
        },
      ],
    };
  }

  async getPrices() {
    // Get Prices from cloud
    this.price = 9;
  }

  async uploadScore(score: number) {
    // Make API Call to store user's score
  }

  async startGame() {
    // Make API Call to check if game can be started
    console.log(this.baseUrl);
    return true;
  }

  async buyTokens(tokens: number) {
    // Buy tokens for username
    this.userData.tokens += tokens;
  }
}
