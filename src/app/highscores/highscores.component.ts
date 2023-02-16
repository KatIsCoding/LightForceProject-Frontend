import { Component } from '@angular/core';
import { CloudService } from './../cloud.service';

@Component({
  selector: 'app-highscores',
  templateUrl: './highscores.component.html',
  styleUrls: ['./highscores.component.css'],
})
export class HighscoresComponent {
  constructor(public cloudService: CloudService) {}
}
