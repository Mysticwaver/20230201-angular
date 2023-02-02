import { Component } from '@angular/core';
import { AuctionItem } from '../auction-item'
import { AuctionsService } from '../auctions.service'

@Component({
  // selector: 'app-auctions-page', // niepotrzebny bo będziemy tego używać przez ROUTER !
  template: `
    <h2 class="my-2">Lista naszych aukcji</h2>
    <div class="row">
      <div class="col-12 col-sm-6 col-md-4 col-lg-3" *ngFor="let item of auctions">
        <app-auction-item-card [auction]="item"></app-auction-item-card>
      </div>
    </div>
  `,
  styles: [
  ],
  // providers: [AuctionsService]
})
export class AuctionsPageComponent {
  auctions: AuctionItem[] = []

  constructor(auctionsService: AuctionsService) {
    this.auctions = auctionsService.getAll();
  }
}
