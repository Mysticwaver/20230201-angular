import { Component, EventEmitter, Input, Output } from '@angular/core';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-box',
  template: `
    <div class="input-group mb-3" style="max-width: 600px">
      <div class="input-group-prepend">
        <span class="input-group-text">🔎</span>
      </div>
      <input type="text" name="title" [placeholder]="placeholder" class="form-control" (input)="handleInput($event)" />
    </div>
  `,
  styles: []
})
export class SearchBoxComponent {
  @Input() placeholder = 'Wyszukaj...';

  private TIME_BETWEEN_EVENTS = 300;
  private subEmitter = new EventEmitter<string>();
  @Output() search = this.subEmitter.pipe(debounceTime(this.TIME_BETWEEN_EVENTS))

  handleInput(ev: Event): void {
    // Type assertion (as) => trust me I know what I'm doing !
    const { value } = (ev.target as HTMLInputElement);
    this.subEmitter.emit(value);
  }
}
