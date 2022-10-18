import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable()
export class FavouriteService {

  constructor(private service: StorageService) {}

  public isFavourite(id: number): boolean {
    const favourites: number[] = this.getAll();
    return !!(favourites && favourites.includes(id));
  }

  public updateFavourite(id: number): boolean {
    const favourites: number[] = this.getAll();
    this.isFavourite(id) ? this.removeFromFavourite(favourites, id) : this.addToFavourite(favourites, id);
    return this.isFavourite(id);
  }

  private addToFavourite(value: number[], id: number): void {
    this.service.set('favourite', value ? [ ...value, id ] : [ id ]);
  }

  private removeFromFavourite(value: number[], id: number): void {
    this.service.set('favourite', value.filter((uid: number) => uid !== id))
  }

  private getAll(): number[] {
    return this.service.get('favourite');
  }
}
