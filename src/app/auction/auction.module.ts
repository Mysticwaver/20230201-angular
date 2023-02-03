import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { SharedModule } from '../shared/shared.module'

import { AuctionRoutingModule } from './auction-routing.module';
import { AuctionsPageComponent } from './auctions-page/auctions-page.component';
import { AuctionItemCardComponent } from './auctions-page/auction-item-card.component';
// import { AuctionsService } from './auctions.service'
import { PromotionsPageComponent } from './promotions-page/promotions-page.component';
import { ShoppingCartPageComponent } from './shopping-cart-page/shopping-cart-page.component';
import { AddAuctionPageComponent } from './add-auction-page/add-auction-page.component';


@NgModule({
  declarations: [
    AuctionsPageComponent,
    AuctionItemCardComponent,
    PromotionsPageComponent,
    ShoppingCartPageComponent,
    AddAuctionPageComponent
  ],
  // exports: [
  //   AuctionsPageComponent
  // ], // nie eksportujemy bo nie używamy selektora
    imports: [
        // CommonModule, ten import nie jest już potrzebny, bo SharedModule eksportuje CommonModule !!
        AuctionRoutingModule,
        SharedModule,
        FontAwesomeModule
    ],
  // https://angular.io/guide/hierarchical-dependency-injection
  // ModuleInjector hierarchy
  // providers: [
  //   AuctionsService
  // ]
})
export class AuctionModule { }
