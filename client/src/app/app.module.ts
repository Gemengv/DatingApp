import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
=======
>>>>>>> 616c6e1583fab4e3d93d99a285711b3d9785e85b

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
=======
    AppRoutingModule
>>>>>>> 616c6e1583fab4e3d93d99a285711b3d9785e85b
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
