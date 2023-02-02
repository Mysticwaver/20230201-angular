import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuctionItem } from '../auction-item'
import { AuctionsService } from '../auctions.service'

@Component({
  // selector: 'app-auctions-page', // niepotrzebny bo będziemy tego używać przez ROUTER !
  template: `
    <h2 class="my-2">Lista naszych aukcji</h2>
    <app-search-box></app-search-box>
    <div class="row">
      <div class="col-12" *ngIf="isLoading">
        <div class="alert alert-info">Wczytuję aukcje....</div>
      </div>
      <div class="col-12" *ngIf="errorMessage">
        <div class="alert alert-danger">Wystąpił błąd: {{errorMessage}}</div>
      </div>
      <div class="col-12 col-sm-6 col-md-4 col-lg-3" *ngFor="let item of auctions">
        <app-auction-item-card [auction]="item"></app-auction-item-card>
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

  constructor(private auctionsService: AuctionsService) {}

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
  }
}
