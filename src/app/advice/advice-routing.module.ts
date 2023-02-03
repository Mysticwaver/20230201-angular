import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdviceDetailsComponent } from './advices-page/advice-details.component'
import { AdvicesPageComponent } from './advices-page/advices-page.component'

const routes: Routes = [
  { path: 'advices', component: AdvicesPageComponent,
    children: [
      { path: '', component: AdviceDetailsComponent },
      { path: ':adviceId', component: AdviceDetailsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdviceRoutingModule { }
