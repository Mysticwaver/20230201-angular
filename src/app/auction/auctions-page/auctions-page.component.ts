import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuctionItem } from '../auction-item'
import { AuctionsService } from '../auctions.service'
import { CartService } from '../cart.service'

@Component({
  // selector: 'app-auctions-page', // niepotrzebny bo będziemy tego używać przez ROUTER !
  template: `
    <h2 class="my-2" appHighlight>Lista naszych aukcji</h2>
    <app-search-box placeholder="Wyszukaj aukcję..." (search)="handleSearch($event)"></app-search-box>
    <div class="row">
      <div class="col-12">
        Jest już {{cartItemsCount$ | async }} elementów w koszyku.
<!--      TEST: {{ auctions | json | uppercase }}-->
      </div>
      <div class="col-12" *ngIf="isLoading">
        <div class="alert alert-info">Wczytuję aukcje....</div>
      </div>
      <div class="col-12" *ngIf="errorMessage">
        <div class="alert alert-danger">Wystąpił błąd: {{errorMessage}}</div>
      </div>
      <div class="col-12 col-sm-6 col-md-4 col-lg-3" *ngFor="let item of auctions">
        <app-auction-item-card [auction]="item"
                               (addToCart)="cartService.addAuction($event)">
        </app-auction-item-card>
      </div>
    </div>
  `,
  styles: [
  ],
  // providers: [AuctionsService]
})
export class AuctionsPageComponent implements OnInit, OnDestroy {
  auctions: AuctionItem[] = []
  isLoading = false
  errorMessage = ''
  auctionSub = new Subscription()
  cartItemsCount$ = this.cartService.getCount()

  constructor(private auctionsService: AuctionsService, public cartService: CartService) {}

  handleSearch(searchText: string) {
    console.log('Szukam', searchText);
  }

  // handleAddToCart(auction: AuctionItem) {
  //   this.cartService.addAuction(auction)
  // }

  ngOnDestroy(): void {
    console.log('AuctionsPageComponent DESTROYED')
    this.auctionSub.unsubscribe()
  }

  ngOnInit(): void {
    this.errorMessage = '';
    this.isLoading = true;
    this.auctionSub = this.auctionsService.getAll().subscribe({
      next: (auctions) => {
        this.auctions = auctions
        this.isLoading = false;
        console.log('UWAGA AUKCJE PRZYSZŁY!')
      },
      error: (err: Error) => {
        console.error(err)
        this.errorMessage = err.message
        this.isLoading = false;
      }/*,
      complete: () => {

      }*/
    });

    // ala Watcher z Vue:
    // tylko pamiętaj o unsubscribe
    this.cartItemsCount$.subscribe(() => {})
  }
}
