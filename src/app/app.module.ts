import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// tak robić nie musimy !!!
// import { AuctionsService } from './auction/auctions.service'
import { HeaderComponent } from './header/header.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { AuctionModule } from './auction/auction.module';
import { SharedModule } from './shared/shared.module';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faCoffee, faGavel, faPlus, faShoppingBasket, faUser, faSearch, faCartPlus, faEdit, faTag, faImage } from '@fortawesome/free-solid-svg-icons';

import { AdviceModule } from './advice/advice.module'

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
    HttpClientModule,
    SharedModule,
    FontAwesomeModule,
    AdviceModule
  ],
  providers: [
    // tak robić nie musimy !!!
    // AuctionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faCoffee, faGavel, faPlus, faShoppingBasket, faUser, faSearch, faCartPlus, faEdit, faTag, faImage)
  }
}
