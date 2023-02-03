import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdviceRoutingModule } from './advice-routing.module';
import { AdvicesPageComponent } from './advices-page/advices-page.component';
import { AdviceDetailsComponent } from './advices-page/advice-details.component';


@NgModule({
  declarations: [
    AdvicesPageComponent,
    AdviceDetailsComponent
  ],
  imports: [
    CommonModule,
    AdviceRoutingModule
  ]
})
export class AdviceModule { }
