import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {InputTextModule} from 'primeng/inputtext';
import {HomeComponent} from './home/home.component';
import {AuthentificationComponent} from './authentification/authentification.component';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from 'primeng/api';
import {RatingModule} from 'primeng/rating';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {DialogModule} from 'primeng/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthentificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    HttpClientModule,
    SharedModule,
    RatingModule,
    ButtonModule,
    CardModule,
    DialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
