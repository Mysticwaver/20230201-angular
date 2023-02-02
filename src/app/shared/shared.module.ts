import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './search-box/search-box.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    SearchBoxComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SearchBoxComponent,
    HighlightDirective,
    CommonModule
  ]
})
export class SharedModule { }
