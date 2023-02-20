import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
    public cloudService: CloudService,
    @Inject(MAT_DIALOG_DATA) public data: { requireToPlay: boolean }
  ) {}
}
