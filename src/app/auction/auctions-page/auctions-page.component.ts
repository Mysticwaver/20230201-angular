import { Component } from '@angular/core';
import { AuctionItem } from '../auction-item'

@Component({
  // selector: 'app-auctions-page', // niepotrzebny bo będziemy tego używać przez ROUTER !
  template: `
    <h2 class="my-2">Lista naszych aukcji</h2>
    <div class="row">
      <div class="col-12 col-sm-6 col-md-4 col-lg-3" >
        <app-auction-item-card [auction]="myAuction"></app-auction-item-card>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class AuctionsPageComponent {
  myAuction: AuctionItem = {
      id: 1,
      title: "Części do aparatu",
      imgUrl: "https://picsum.photos/id/36/200/200",
      description: "Jakiś opis",
      price: 2000
    }
}
