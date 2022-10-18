import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchFormComponent {
  @Output() public search = new EventEmitter<string>();

  public value: string = '';

  public onSubmit(): void {
    this.search.emit(this.value);
  }
}
