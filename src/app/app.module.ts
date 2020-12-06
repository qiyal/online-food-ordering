import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/part/header/header.component';
import { FooterComponent } from './components/part/footer/footer.component';
import { SignInComponent } from './components/part/sign-in/sign-in.component';
import { SignUpComponent } from './components/part/sign-up/sign-up.component';
import {AuthService} from './services/auth.service';
import { HomeComponent } from './components/pages/home/home.component';
import {MatChipsModule} from '@angular/material/chips';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { RestaurantCardComponent } from './components/part/restaurant-card/restaurant-card.component';
import { CarouselComponent } from './components/part/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    RestaurantCardComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatChipsModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
