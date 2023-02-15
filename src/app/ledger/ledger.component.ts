import { Component } from '@angular/core';
import { CloudService } from './../cloud.service';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css'],
})
export class LedgerComponent {
  constructor(public cloudService: CloudService) {}
}
