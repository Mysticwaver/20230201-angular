import { Component, Input/*, ViewEncapsulation*/ } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <!--    <header [title]="helloTitle" (click)="addExclamationToTitle()"> -->
    <!-- to samo co to: -->
    <header [title]="helloTitle" (click)="title = title + '!'">
      <h1> {{title}} <fa-icon icon="coffee"></fa-icon></h1>
    </header>
  `,
  styles: [
    `
        h1 {
          color: white;
          text-shadow: black 2px 2px 2px;
        }

        header {
          padding: 15px;
          margin: 0;
          background: url("https://picsum.photos/id/180/2000/400") no-repeat center;
        }
    `
  ],
  // encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
    @Input() title = 'Auction Portal';
    helloTitle = 'sample title';
    // będzie też @Output() do komunikacji w 2 stronę.

    // Możemy dowolną rzecz z logiki z mienić w czasie, - zaktualizuje się na widoku.
    // constructor() {
    //   setTimeout(() => {
    //      this.title += '!'
    //   }, 3000)
    // }
    addExclamationToTitle() {
      this.title += '!'
    }
}
