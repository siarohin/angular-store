import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IPunk, PunkFacadeService } from '../../core/';
import { ISort } from '../header/components';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  public data: IPunk[];

  @Input() public tag: string;
  @Input() public sortValue: ISort;
  @Input() public isList: boolean;

  constructor(private service: PunkFacadeService,
              private changeDetection: ChangeDetectorRef) { }

  public ngOnInit(): void {
    this.subscription = this.service.getAll().subscribe((data: IPunk[]) => {
      this.data = data;
      this.changeDetection.markForCheck();
    });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
