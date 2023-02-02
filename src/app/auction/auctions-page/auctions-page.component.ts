import { Component } from '@angular/core';
import { AuctionItem } from '../auction-item'

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
  ]
})
export class AuctionsPageComponent {
  auctions: AuctionItem[] = [
    {
      id: 1,
      title: "Części do aparatu",
      imgUrl: "https://picsum.photos/id/36/600/600",
      description: "Jakiś opis",
      price: 2000
    },
    {
      id: 1,
      title: "Części do aparatu",
      imgUrl: "https://picsum.photos/id/232/600/600",
      description: "Jakiś opis",
      price: 2000
    },
    {
      id: 1,
      title: "Części do aparatu",
      imgUrl: "https://picsum.photos/id/222/600/600",
      description: "Jakiś opis",
      price: 2000
    },
    {
      id: 1,
      title: "Części do aparatu",
      imgUrl: "https://picsum.photos/id/111/600/600",
      description: "Jakiś opis",
      price: 2000
    },
    {
      id: 1,
      title: "Części do aparatu",
      imgUrl: "https://picsum.photos/id/136/600/600",
      description: "Jakiś opis",
      price: 2000
    }
    ]
}
