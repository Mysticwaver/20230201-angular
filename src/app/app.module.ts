import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// tak robić nie musimy !!!
// import { AuctionsService } from './auction/auctions.service'
import { HeaderComponent } from './header/header.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { AuctionModule } from './auction/auction.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuctionModule,
  ],
  providers: [
    // tak robić nie musimy !!!
    // AuctionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
