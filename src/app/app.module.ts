import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


import { AppComponent } from './app.component';
import { OrderByPipe } from './shared/orderBy.pipe';
import { FileSizePipe } from './shared/size.pipe';
import { CapitalizePipe } from './shared/capitalize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    OrderByPipe,
    FileSizePipe,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
