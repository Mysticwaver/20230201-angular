import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuctionItem } from '../auction-item'

// TO ma być DUMMY COMPONENT
// Więc, zamiast wstrzykiwać tutaj service -> zrób @Output()

@Component({
  selector: 'app-auction-item-card',
  template: `
    <div class="card" *ngIf="auction">
      <div class="card-header">{{auction.title}}</div>
      <img class="card-img" [src]="auction.imgUrl" [alt]="imgAlt" />
      <div class="card-body">
        <p class="card-text">{{auction.description}}</p>
        <div class="d-flex justify-content-between align-content-center">
          <strong> {{auction.price}} zł</strong>
          <button class="btn btn-primary" (click)="addToCart.emit(auction)">
            <fa-icon icon="cart-plus"></fa-icon>
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class AuctionItemCardComponent {
  @Input() auction?: AuctionItem;
  @Output() addToCart = new EventEmitter<AuctionItem>()

  get imgAlt() {
    return `Fotografia ${this.auction?.title}`
  }
}
