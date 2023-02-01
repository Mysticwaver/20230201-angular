import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuctionRoutingModule } from './auction-routing.module';
import { AuctionsPageComponent } from './auctions-page/auctions-page.component';


@NgModule({
  declarations: [
    AuctionsPageComponent
  ],
  // exports: [
  //   AuctionsPageComponent
  // ], // nie eksportujemy bo nie używamy selektora
  imports: [
    CommonModule,
    AuctionRoutingModule
  ]
})
export class AuctionModule { }
