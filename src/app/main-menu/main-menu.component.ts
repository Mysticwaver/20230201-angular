import { Component } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light px-3 mb-3" [title]="computedTitle">
      <button class="navbar-toggler" type="button" (click)="handleTogglerClick()" [title]="80 + 20">
        <span class="navbar-toggler-icon"></span>
      </button>
     <!-- <div class="collapse navbar-collapse" [class.show]="isMenuShown"> -->
      <div class="collapse navbar-collapse" [ngClass]="{'show' : isMenuShown }">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="auctions">Aukcje</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="promotions">Promocje</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="advices">Podpowiadamy</a>
          </li>
        </ul>
      </div>
    </nav>
  `,
  styles: [
  ]
})
export class MainMenuComponent {
  isMenuShown = false

  handleTogglerClick() {
    this.isMenuShown = !this.isMenuShown;
  }

  get computedTitle(): string {
    return `This menu is ${ this.isMenuShown ? '' : 'NOT '}shown`
  }

}
