import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '../cart-item'
import { CartService } from '../cart.service'

@Component({
  template: `
    <h2 class="my-2">Koszyk</h2>
    <div>
      <!--Elementy w koszyku {{ cartItem$ | async | json }}-->
      <ul class="list-group">
        <li class="list-group-item" *ngFor="let item of cartItem$ | async">
          {{ item | json }}
        </li>
      </ul>
      <div class="d-flex mt-2 justify-content-end">
        Wartość koszyka: {{ cartValue$ | async }} zł
      </div>
    </div>
  `,
  styles: [
  ]
})
export class ShoppingCartPageComponent {
  cartItem$: Observable<CartItem[]> = this.cartService.getAll()
  cartValue$: Observable<number> = this.cartService.getValue()

  constructor(private cartService: CartService) {}
}
