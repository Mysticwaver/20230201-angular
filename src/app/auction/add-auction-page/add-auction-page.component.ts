import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'
import { AuctionItem } from '../auction-item'

@Component({
  templateUrl: './add-auction-page.component.html',
  styles: [
    `
      input.ng-touched.ng-invalid, textarea.ng-touched.ng-invalid {
        border: 1px solid #f14668;
      }
    `
  ]
})
export class AddAuctionPageComponent {

  imgID = 1;

  get imgPreviewUrl() {
     return `https://picsum.photos/id/${this.imgID}/600/600`
  }

  handleFormSubmit(form: NgForm) {
    if(form.invalid) {
      form.control.markAllAsTouched();
      return;
    }
    const { price, title, description } = form.value;
    const auction: AuctionItem = {
      id: 0,
      imgUrl: this.imgPreviewUrl,
      description,
      price,
      title
    }
    console.dir(auction)
  }
}
