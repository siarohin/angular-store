import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toggle-form',
  templateUrl: './toggle-form.component.html',
  styleUrls: [ './toggle-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToggleFormComponent {
  public isList: boolean = false;

  @Output() public isListView = new EventEmitter<boolean>();

  public toggleView(): void {
    this.isList = !this.isList;
    this.isListView.emit(this.isList);
  }
}
