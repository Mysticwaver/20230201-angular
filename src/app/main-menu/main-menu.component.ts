import { Component } from '@angular/core';

interface MenuItem {
   link: string;
   title: string;
}

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
          <li class="nav-item" *ngFor="let item of menuItems" appHighlight>
            <a class="nav-link" [routerLink]="item.link" routerLinkActive="active">{{item.title}}</a>
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

  menuItems: MenuItem[] = [
    { link: '/auctions', title: 'Aukcje' },
    { link: '/promotions', title: 'Promocje' },
    { link: '/advices', title: 'Podpowiadamy' },
  ]

  handleTogglerClick() {
    this.isMenuShown = !this.isMenuShown;
  }

  get computedTitle(): string {
    return `This menu is ${ this.isMenuShown ? '' : 'NOT '}shown`
  }

}
