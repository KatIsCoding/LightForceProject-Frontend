import { Component, HostListener } from '@angular/core';
import { CloudService } from './../cloud.service';

enum PossibleDirections {
  Up = 'ArrowUp',
  Down = 'ArrowDown',
  Left = 'ArrowLeft',
  Right = 'ArrowRight',
}

const possibleRotationAngles = [45, 135, -45, -135];

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent {
  direction: keyof typeof PossibleDirections = 'Down';
  rotationAngle = '-45deg';
  running = false;
  score = 0;

  constructor(private cloudService: CloudService) {}

  private setNextDirection() {
    const randomDirection = <keyof typeof PossibleDirections>(
      Object.keys(PossibleDirections)[
        Math.floor(Math.random() * Object.keys(PossibleDirections).length)
      ]
    );
    console.log(randomDirection);

    const randomRotationAngle =
      possibleRotationAngles[
        Math.floor(Math.random() * possibleRotationAngles.length)
      ] + 'deg';

    this.direction = randomDirection;
    this.rotationAngle = randomRotationAngle;
  }

  private checkKeyboardInput(event: KeyboardEvent) {
    if (event.code === PossibleDirections[this.direction]) {
      this.score++;
    } else if (this.score > 0) {
      this.score--;
    }
  }

  async startGame() {
    (await this.cloudService.startGame()).subscribe((response) => {
      if (!response.playable) {
        // Show the message Not enough credits
        console.error('Not enough credits');
        return;
      }
      this.cloudService.updateUserData(response.userData);
      this.score = 0;
      this.running = true;
      setTimeout(() => {
        this.running = false;
        this.cloudService.uploadScore(this.score);
      }, 20000);
    });
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (!this.running) {
      return;
    }

    this.checkKeyboardInput(event);
    this.setNextDirection();
  }
}
