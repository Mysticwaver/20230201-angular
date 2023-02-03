import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Subscription } from 'rxjs'
import { CreateAuctionItem } from '../auction-item'
import { AuctionsService } from '../auctions.service'

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
export class AddAuctionPageComponent implements OnDestroy {

  imgID = 1;
  formSubmitted = false; // prevent double submitting

  addAuctionSub = new Subscription()

  constructor(private auctionsService: AuctionsService) {}

  get imgPreviewUrl() {
     return `https://picsum.photos/id/${this.imgID}/600/600`
  }

  handleFormSubmit(form: NgForm) {
    if(form.invalid) {
      form.control.markAllAsTouched();
      return;
    }
    const { price, title, description } = form.value;
    const auction: CreateAuctionItem = {
      imgUrl: this.imgPreviewUrl,
      description,
      price,
      title
    }
    this.formSubmitted = true;
    // Dodaj aukcje na backend, jeśli ok to:
    this.addAuctionSub = this.auctionsService.add(auction).subscribe({
      next: () => {
        // resetuj form !
        form.reset({imgUrl: 1})
        this.formSubmitted = false;
      },
      error: (err) => {
        console.error(err)
        this.formSubmitted = false;
      }
    })
  }

  ngOnDestroy(): void {
    this.addAuctionSub.unsubscribe();
  }
}
