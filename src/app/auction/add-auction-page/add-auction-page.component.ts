import { Component } from '@angular/core';

@Component({
  templateUrl: './add-auction-page.component.html',
  styles: [
  ]
})
export class AddAuctionPageComponent {

  handleFormSubmit(ev: SubmitEvent, form: HTMLFormElement) {
    ev.preventDefault();
    console.dir(form)
  }
}
