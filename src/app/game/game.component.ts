import { Component, HostListener } from '@angular/core';

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
  running = true;
  score = 0;

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
    }
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
