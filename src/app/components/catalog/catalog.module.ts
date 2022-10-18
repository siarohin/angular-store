import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardModule } from '../card';
import { CatalogComponent } from './catalog.component';
import { PipesModule } from './pipes';

@NgModule({
  declarations: [
    CatalogComponent,
  ],
  imports: [
    BrowserModule,
    PipesModule,
    CardModule,
  ],
  providers: [],
  exports: [
    CatalogComponent,
  ]
})
export class CatalogModule { }
