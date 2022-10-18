import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ISort } from './components/header/components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  public tag: string = '';
  public sortValue: ISort;
  public isList: boolean;

  public onSearch(value: string): void {
    this.tag = value;
  }

  public onSort(value: ISort): void {
    this.sortValue = value;
  }

  public toggleList(value: boolean): void {
    this.isList = value;
  }
}
