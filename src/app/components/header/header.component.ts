import { Component, EventEmitter, Output } from '@angular/core';
import { ISort } from './components';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{

  @Output() public search = new EventEmitter<string>();
  @Output() public sort = new EventEmitter<ISort>();
  @Output() public isListView = new EventEmitter<boolean>();

  public onSearch(value: string): void {
    this.search.emit(value);
  }

  public onSort(value: ISort): void {
    this.sort.emit(value);
  }

  public toggleList(value: boolean): void {
    this.isListView.next(value);
  }

}
