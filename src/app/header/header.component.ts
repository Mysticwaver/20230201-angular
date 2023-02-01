import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <h1> {{title}} </h1>
    </header>
  `,
  styles: [
  ]
})
export class HeaderComponent {
    @Input() title = 'Auction Portal'
    // będzie też @Output() do komunikacji w 2 stronę.

    // Możemy dowolną rzecz z logiki z mienić w czasie, - zaktualizuje się na widoku.
    // constructor() {
    //   setTimeout(() => {
    //      this.title += '!'
    //   }, 3000)
    // }
}
