import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuctionRoutingModule } from './auction-routing.module';
import { AuctionsPageComponent } from './auctions-page/auctions-page.component';
import { AuctionItemCardComponent } from './auctions-page/auction-item-card.component';
import { PromotionsPageComponent } from './promotions-page/promotions-page.component';


@NgModule({
  declarations: [
    AuctionsPageComponent,
    AuctionItemCardComponent,
    PromotionsPageComponent
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
