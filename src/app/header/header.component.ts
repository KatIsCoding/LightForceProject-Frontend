import { Component } from '@angular/core';
import { CloudService } from './../cloud.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(public cloudService: CloudService) {}
}
