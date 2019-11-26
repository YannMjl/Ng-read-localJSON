import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


import { AppComponent } from './app.component';
import { OrderByPipe } from './shared/orderBy.pipe';
import { FileSizePipe } from './shared/size.pipe';
import { CapitalizePipe } from './shared/capitalize.pipe';
import { MycurrencyPipe } from './shared/mycurrency.pipe';
import { FilterPipe } from './shared/filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    OrderByPipe,
    FileSizePipe,
    CapitalizePipe,
    MycurrencyPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
