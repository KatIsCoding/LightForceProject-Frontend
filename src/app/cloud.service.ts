import { Injectable } from '@angular/core';
import { UserData } from './user.data';

@Injectable({
  providedIn: 'root',
})
export class CloudService {
  userData: UserData | null = null;
  loggedIn: boolean = false;
  constructor() {}

  async login(username: string) {
    // this.fetch(username)
    this.loggedIn = true;
  }
}
