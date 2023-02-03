import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './search-box/search-box.component';
import { HighlightDirective } from './highlight.directive';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faCoffee, faGavel, faPlus, faShoppingBasket, faUser, faSearch, faCartPlus, faEdit, faTag, faImage } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [
    SearchBoxComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    SearchBoxComponent,
    HighlightDirective,
    CommonModule,
    FontAwesomeModule
  ]
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faCoffee, faGavel, faPlus, faShoppingBasket, faUser, faSearch, faCartPlus, faEdit, faTag, faImage)
  }
}
