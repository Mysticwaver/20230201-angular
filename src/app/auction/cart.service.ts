import { Injectable } from '@angular/core';
import { AuctionItem } from './auction-item'
import { CartItem } from './cart-item'

// Fasada
// STATEFUL SERVICE
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: CartItem[] = []

  addAuction(auction: AuctionItem) {
    const item = this.items.find(i => i.id === auction.id)
    if(item) {
      item.amount++
    } else {
      this.items.push({
        id: auction.id,
        amount: 1,
        auction
      })
    }
  }
  getAll(): readonly CartItem[] {
    return this.items
  }
  getCount(): number {
    return this.items.reduce((amount, item) => amount + item.amount, 0)
  }
  getValue(): number {
    return this.items.reduce((value, item) => value + item.amount * item.auction.price, 0)
  }
}
