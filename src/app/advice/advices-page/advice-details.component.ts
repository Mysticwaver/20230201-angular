import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  template: `
    <p>
      Wybrano id do załadowania {{ myAdviceId }}
    </p>
  `,
  styles: []
})
export class AdviceDetailsComponent {

  myAdviceId = 0

  constructor(private activatedRoute: ActivatedRoute) {
    // Niepoprawnie bo mamy tylko 1 wartość
    // this.myAdviceId = Number(activatedRoute.snapshot.params['adviceId']);

    activatedRoute.params.subscribe((params) => {
      this.myAdviceId = Number(params['adviceId']);
    })
  }
}
