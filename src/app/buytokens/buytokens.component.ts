import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CloudService } from './../cloud.service';

@Component({
  selector: 'app-buytokens',
  templateUrl: './buytokens.component.html',
  styleUrls: ['./buytokens.component.css'],
})
export class BuytokensComponent {
  tokens: number = 0;
  constructor(
    public dialogRef: MatDialogRef<BuytokensComponent>,
    public cloudService: CloudService
  ) {}
}
