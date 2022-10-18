import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FavouriteService, IPunk } from '../../core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {
  public isFavourite: boolean = false;

  @Input() data: IPunk;
  @Input() isList: boolean;

  constructor(private service: FavouriteService) {}

  public ngOnInit(): void {
    this.isFavourite = this.service.isFavourite(this.data.id);
  }

  public updateFavourite(): void {
    this.isFavourite = this.service.updateFavourite(this.data.id);
  }
}
