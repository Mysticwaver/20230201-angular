import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module'

import { AuctionRoutingModule } from './auction-routing.module';
import { AuctionsPageComponent } from './auctions-page/auctions-page.component';
import { AuctionItemCardComponent } from './auctions-page/auction-item-card.component';
// import { AuctionsService } from './auctions.service'
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
    AuctionRoutingModule,
    SharedModule
  ],
  // https://angular.io/guide/hierarchical-dependency-injection
  // ModuleInjector hierarchy
  // providers: [
  //   AuctionsService
  // ]
})
export class AuctionModule { }
