# Zadania na start
## Dzień 3

### Zadanie #1 | Nowy moduł advice z routing table
    
> Pamiętaj, że strona _Podpowiadamy_ z założenia miała pokazywać artykuły blogowe. Więc jest to wyraźnie oddzielny temat w naszej aplikacji. Dlatego chcemy przygotować dla niego specjalne miejsce. 

1.1 Spraw, aby strona `/advices` (Podpowiadamy) działała poprawnie, będąc częścią osobnego nowego modułu `advice`

1.2 Dodaj do `advices-page` template:

```html
<h2 class="my-3">Podpowiadamy co wybrać !</h2>
<section class="row">
  <div class="col-12 col-sm-4">
    <ul class="list-group">
      <li class="list-group-item">
        <a routerLink="/advices/1"> Jak wybrać dobry komputer? </a>
      </li>
      <li class="list-group-item">
        <a routerLink="/advices/2"> Inny tytuł </a>
      </li>
      <li class="list-group-item">
        <a routerLink="/advices/3"> Co robić kiedy... </a>
      </li>
      <li class="list-group-item">
        <a routerLink="/advices/4"> Artykuł 4 </a>
      </li>
      <li class="list-group-item">
        <button class="btn btn-primary" routerLink="/advices/67">
          Artykuł 67
        </button>
      </li>
    </ul>
  </div>
  <div class="col-12 col-sm-8">
    <router-outlet></router-outlet>
  </div>
</section>
```
      
1.3 Ten `router-outlet` będzie obsługiwał tzw. _child routing_. Zaimplementujemy go razem, ale już teraz możesz przygotować komponent `advice-details`, który potem będziemy osadzać w tym _outlecie_


### Zadanie #2 | W pełni działające menu + strony

1.1 Buttony w menu:

Dodaj na koniec widoku `main-menu` kod HTML pomiędzy jego znacznikami:
```html
....
    </div>
    <!-- tutaj -->
</nav>
```
Kod z buttonami do dodania:
```html
<div class="text-light">
  <a class="btn btn-primary">
    <fa-icon icon="plus"></fa-icon> Dodaj
  </a>
  <a class="btn btn-secondary ml-2">
    <fa-icon icon="shopping-basket"></fa-icon> Koszyk
  </a>
</div>
```

1.2 Dodaj brakujące strony jako komponenty `*-page`, nazwij je np.: `add-auction-page`, `shopping-cart-page`
template jako oddzielny plik zrób tylko w komponencie - `add-auction-page`
(pozostałe mogą mieć inline-style oraz template)

1.3 Podłącz strony z routingiem i menu (przyciski: Dodaj i Koszyk).

1.4 Do `add-auction-page` dodaj kod HTML, przygotowany pod formularz dodawania aukcji:

```html
<h2 class="my-3">Dodaj nową aukcję</h2>
<section class="row">
  <div class="col-6">
    <img
      class="img-thumbnail"
      alt="Podgląd fotografii"
      src="https://picsum.photos/id/1/600/600"
    />
  </div>
  <div class="col-6">
    <form>
      <div class="form-group">
        <label for="auctionTitle">Nazwa aukcji</label>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <fa-icon icon=="edit"></fa-icon>
            </span>
          </div>
          <input
            id="auctionTitle"
            type="text"
            name="title"
            required
            class="form-control"
          />
        </div>
      </div>

      <div class="form-group">
        <label for="auctionPrice">Cena aukcji</label>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <fa-icon icon=="tag"></fa-icon>
            </span>
          </div>
          <input
            id="auctionPrice"
            type="number"
            name="price"
            required
            class="form-control"
          />
        </div>
      </div>

      <div class="form-group">
        <label for="img">Zdjecie</label>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <fa-icon icon=="image"></fa-icon>
            </span>
          </div>
          <input
            id="img"
            type="number"
            name="imgUrl"
            required
            class="form-control"
          />
        </div>
      </div>

      <div class="form-group">
        <label for="auctionDescription">Szczegółowy opis</label>
        <div class="input-group mb-3">
          <textarea
            id="auctionDescription"
            rows="5"
            class="form-control"
            name="description"
          ></textarea>
        </div>
      </div>
      <div class="text-right">
        <button class="btn btn-primary" type="submit">
          <fa-icon icon=="gavel"></fa-icon> Dodaj aukcję
        </button>
      </div>
    </form>
  </div>
</section>
```
[link do kodu HTML](https://codesandbox.io/s/auction-portal-htmls-ulkx1?file=/add-auction-page.html:0-2170)

#### Pomocne linki do zadania 2:
- [defining-a-basic-route](https://angular.io/guide/router#defining-a-basic-route)
- [route-order](https://angular.io/guide/router#route-order)
- [RouterLink](https://angular.io/api/router/RouterLink#description)

### Zadanie #3 | Naprawa ikon
   
3.1 Jeśli chcesz, możesz przenieść ikony do modułu `shared`. Zrób to tak, aby każdy, kto importuje ten moduł miał dostęp do komponentu `fa-icon` z modułu `FontAwesomeModule`

3.2 Ikony do dodania w `FaIconLibrary`

```typescript
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faCoffee, faGavel, faPlus, faShoppingBasket, faUser, faSearch, faCartPlus, faEdit, faTag, faImage } from '@fortawesome/free-solid-svg-icons';

//...
export class SomeModule {

  constructor(library: FaIconLibrary) {
    library.addIcons(faCoffee, faGavel, faPlus, faShoppingBasket, faUser, faSearch, faCartPlus, faEdit, faTag, faImage)
  }
}
```

### Zadanie #4 | _Stateful service_: `cart`

4.1 Wygeneruj serwis, w którym będziemy trzymać elementy koszyka.

4.2 Dodaj i nazwij nowy kształt danych przechowywanych na podstawie dodawanej aukcji.

4.3 Ustal tablicę przechowywanych elementów oraz metody dla:
  - dodania `AuctionItem` do koszyka
  - pobrania wszystkich elementów w koszyku
  - wyświetlenia ilości elementów
  - wyświetlenia ceny wszystkich elementów

4.4 Dopisz odpowiednią logikę do tych metod. (Na razie wszystko może być jeszcze BEZ `Observable` !!)


