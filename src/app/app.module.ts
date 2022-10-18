import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogModule, HeaderModule } from './components';
import { CoreModule, HttpErrorInterceptor } from './core';

@NgModule({
  declarations: [
    AppComponent,
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true,
  }],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HeaderModule,
    CatalogModule,
    CoreModule.forRoot(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
