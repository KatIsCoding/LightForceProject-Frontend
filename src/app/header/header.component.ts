import { Component } from '@angular/core';
import { CloudService } from './../cloud.service';
import { MatDialog } from '@angular/material/dialog';

import { BuytokensComponent } from '../buytokens/buytokens.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(public cloudService: CloudService, public dialog: MatDialog) {}

  openBuyTokensDialog() {
    const dialogRef = this.dialog.open(BuytokensComponent);

    dialogRef.afterClosed().subscribe((tokens) => {
      if (tokens) {
        this.cloudService.buyTokens(tokens);
      }
    });
  }
}
