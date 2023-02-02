
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { AuctionItem } from './auction-item'
import { catchError, Observable, of, retry, tap } from 'rxjs'
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
    return this.httpClient.get<AuctionItem[]>(this.AUCTION_ENDPOINT).pipe(
      tap(auctions => {
         console.log('USER REQUESTED', auctions.length, 'auctions')
      }),
      // CICHA obsługa błędu (pomimo że jest błąd na serwerze, to subscriber dostanie pustą tablicę, a nie błąd)
      catchError(err => {
        // tutaj obsługuję błąd
        console.error('Mam error ale NBD', err.message)
        // przepinam to na strumień z pustą tablicą....
        return of([])
      }),
      retry(2)
    )
  }

  add(auction: AuctionItem): Observable<AuctionItem> {
    return this.httpClient.post<AuctionItem>(this.AUCTION_ENDPOINT, auction)
  }
}
