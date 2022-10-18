import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SearchFormComponent, SortFormComponent } from './components';
import { ToggleFormComponent } from './components/toggle-form';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    SearchFormComponent,
    SortFormComponent,
    ToggleFormComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  exports: [
    HeaderComponent,
  ]
})
export class HeaderModule { }
