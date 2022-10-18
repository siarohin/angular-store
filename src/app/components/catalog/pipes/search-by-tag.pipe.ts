import { Pipe, PipeTransform } from '@angular/core';
import { IPunk } from '../../../core';

@Pipe({ name: 'searchByTag' })
export class SearchByTagPipe implements PipeTransform {
  public transform(data: Array<IPunk>, value: string): any {
    if (!value) {
      return data;
    }
    return data?.filter((item: IPunk) => item.tagline.toLowerCase().includes(value));
  }
}
