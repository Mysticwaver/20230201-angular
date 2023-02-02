# Zadania na start
## Dzień 2

### Zadanie #1 | Wyświetlanie jednej aukcji na ekranie

1.1 Do komponentu [AuctionsPageComponent](./src/app/auction/auctions-page/auctions-page.component.ts) dopisz kod obsługujący wyświetlanie komponentu z aukcją.

```html
<h2 class="my-2">Lista naszych aukcji</h2>
<div class="row">
  <div class="col-12 col-sm-6 col-md-4 col-lg-3" >
    <app-auction-item-card [auction]="myAuction"></app-auction-item-card>
  </div>
</div>
```

1.2 Utwórz nowy komponent (inline style i template) z selektorem `app-auction-item-card` który będzie otrzymywał `auction` jako props. Jego kod template to:

```html
<div class="card">
  <div class="card-header">Tytuł</div>
  <img class="card-img" src="" alt="" />
  <div class="card-body">
    <p class="card-text">Opis aukcji</p>
    <div class="d-flex justify-content-between align-content-center">
      <strong> 0 zł</strong>
      <button class="btn btn-primary">
        <i class="fa fa-cart-plus"></i>
      </button>
    </div>
  </div>
</div>
```

1.3 `myAuction` - będzie obiektem reprezentującym jedną aukcję. Możesz przygotować dla niej `interface` z nazwą `AuctionItem` wiedząc, że dane z back-end'u, będą przychodzić w takiej postaci:

```json
{
    "id": 1,
    "title": "Części do aparatu",
    "imgUrl": "https://picsum.photos/id/36/200/200",
    "description": "Jakiś opis",
    "price": 2000
}
```

- pole `description` jest opcjonalne
- możesz uzupełnić `myAuction` tymi danymi + użyć interfejsu (do typowania).
- ustal bindowanie w kompoencie `app-auction-item-card` tak, aby poprawnie wyświetlał przekazane `myAuction` przez propsa od rodzica.

### Zadanie #2 | Nowa strona `PromotionsPageComponent`

2.1 Utwórz nowy komponent reprezentujący stronę z promocyjnymi aukcjami. Dodaj do niej taki template:

```html
<h2 class="my-2">Promocyjne aukcje</h2>
```

2.2 Wepnij te stronę w routing tak, aby wyświetlała się po przejściu na `/promotios` 
