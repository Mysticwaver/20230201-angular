
import { Injectable } from '@angular/core'
import { AuctionItem } from './auction-item'

@Injectable({
  providedIn: 'root'
  // Żeby to było faktycznym singletonem,
  // nie może występować w żadnej innej tablicy providers !!!
})
export class AuctionsService {

  // Fasada (wyprowadzam tylko metody do zarządzania stanem, który przechowuje)
  // STATEFUL SERVICE
  private auctions: AuctionItem[] = [
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

  getAll(): AuctionItem[] {
    return this.auctions
  }
}
