import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { ISort } from './models';

@Component({
  selector: 'app-sort-form',
  templateUrl: './sort-form.component.html',
  styleUrls: [ './sort-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortFormComponent {
  public isAsc: boolean = false;
  public isDesc: boolean = false;

  @Output() public sort = new EventEmitter<ISort>();

  public sortByAsc(): void {
    this.isAsc = !this.isAsc;
    this.isDesc = false;
    this.sort.emit({ isAsc: this.isAsc, isDesc: this.isDesc });
  }

  public sortByDesc(): void {
    this.isDesc = !this.isDesc;
    this.isAsc = false;
    this.sort.emit({ isAsc: this.isAsc, isDesc: this.isDesc });
  }
}
