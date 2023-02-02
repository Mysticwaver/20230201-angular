
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { AuctionItem } from './auction-item'
import { Observable } from 'rxjs'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
  // Żeby to było faktycznym singletonem,
  // nie może występować w żadnej innej tablicy providers !!!
})
export class AuctionsService {

  private readonly AUCTION_ENDPOINT = `${environment.BASE_URL}/auctions`;
  // Fasada
  // STATELESS SERVICE
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<AuctionItem[]> {
    return this.httpClient.get<AuctionItem[]>(this.AUCTION_ENDPOINT)
  }

  add(auction: AuctionItem): Observable<AuctionItem> {
    return this.httpClient.post<AuctionItem>(this.AUCTION_ENDPOINT, auction)
  }
}
