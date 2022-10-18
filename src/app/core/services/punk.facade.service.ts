import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as _ from "lodash";
import { IPunk } from '../models';
import { PunkService } from './punk.service';

@Injectable()
export class PunkFacadeService {

  constructor(private service: PunkService) {}

  public getAll(): Observable<IPunk[]> {
    return this.service.getAll().pipe(
      map((data: any) => this.filter<IPunk>(data, 'id', 'name', 'abv', 'tagline', 'image_url'))
    )}

  private filter<T>(value: any, ...props: string[]): Observable<T[]> {
    return value.map((item: any) => _.pick(item, props));
  }
}
