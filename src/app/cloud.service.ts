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
  highscores: [string, number][] = [];

  private baseUrl = enviroment.baseUrl;

  constructor(private http: HttpClient) {}

  async login(username: string) {
    // Get userData
    this.http
      .post<UserData>(
        this.baseUrl + 'login',
        {
          username,
        },
        { responseType: 'json' }
      )
      .subscribe((res) => {
        this.userData = res;
        this.loggedIn = true;
        this.getPrices();
        this.getHighScores();
      });
  }

  async getPrices() {
    // Get Prices from cloud
    this.http
      .get<{ id: number; cost: number }>(this.baseUrl + 'getPrices')
      .subscribe((res) => {
        this.price = res.cost;
      });
  }

  async uploadScore(score: number) {
    // Make API Call to store user's score
    await this.http
      .post<[string, number][]>(this.baseUrl + 'newScore', {
        username: this.userData.username,
        score,
      })
      .subscribe((res) => {
        this.highscores = res;
      });
  }

  async getHighScores() {
    this.http
      .get<[string, number][]>(this.baseUrl + 'getHighscores')
      .subscribe((result) => {
        console.log('Results: ', result);
        this.highscores = result;
      });
  }

  async startGame() {
    // Make API Call to check if game can be started
    return this.http.post<{ userData: UserData; playable: boolean }>(
      this.baseUrl + 'startGame',
      { username: this.userData.username, gameId: 1 } // Game ID hardcoded since there's only one currently
    );
  }

  updateUserData(userData: UserData) {
    this.userData = userData;
  }

  async buyTokens(tokens: number) {
    // Buy tokens for username
    this.http
      .post<UserData>(this.baseUrl + 'buyTokens', {
        username: this.userData.username,
        tokens,
      })
      .subscribe((result) => {
        this.userData = result;
      });
  }
}
