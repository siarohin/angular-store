import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const CONFIG_URL = 'https://api.punkapi.com/v2';

@Injectable()
export class PunkService {

  constructor(private http: HttpClient) {}

  public getAll(): any {
    return this.http.get<any>(`${CONFIG_URL}/beers`);
  }
}
