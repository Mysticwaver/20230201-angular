
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { AuctionItem } from './auction-item'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
  // Żeby to było faktycznym singletonem,
  // nie może występować w żadnej innej tablicy providers !!!
})
export class AuctionsService {

  // Fasada
  // STATELESS SERVICE
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<AuctionItem[]> {
    return this.httpClient.get<AuctionItem[]>('http://localhost:3000/auctions')
  }
}
