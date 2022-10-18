import { Pipe, PipeTransform } from '@angular/core';
import { IPunk } from '../../../core';
import { ISort } from '../../header';

@Pipe({ name: 'sortByValue' })
export class SortByValuePipe implements PipeTransform {
  public transform(data: Array<IPunk>, value: ISort): Array<IPunk> {
    if (!value || (!value.isDesc && !value.isAsc)) {
      return data;
    }
    const { isAsc } = value;
    return isAsc ? data.slice().sort((a, b) => a.abv - b.abv) : data.slice().sort((a, b) => b.abv - a.abv);
  }
}
