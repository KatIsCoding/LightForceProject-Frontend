import { Component } from '@angular/core';

import { CloudService } from '../cloud.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';

  constructor(private cloudService: CloudService) {}

  setUsername(username: string) {
    this.cloudService.login(username);
  }
}
