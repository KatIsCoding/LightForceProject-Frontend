import { Component } from '@angular/core';
import { CloudService } from './cloud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'LightForce Arcade';

  constructor(public cloudService: CloudService) {}
}
