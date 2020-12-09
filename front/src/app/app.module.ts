import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/part/header/header.component';
import { FooterComponent } from './components/part/footer/footer.component';
import { SignInComponent } from './components/pages/sign-in/sign-in.component';
import { SignUpComponent } from './components/pages/sign-up/sign-up.component';
import {AuthService} from './services/auth.service';
import { HomeComponent } from './components/pages/home/home.component';
import {MatChipsModule} from '@angular/material/chips';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { RestaurantCardComponent } from './components/part/restaurant-card/restaurant-card.component';
import { CarouselComponent } from './components/part/carousel/carousel.component';
import { MeComponent } from './components/pages/me/me.component';
import {MatTabsModule} from '@angular/material/tabs';
import { PersonalInfoComponent } from './components/pages/me/personal-info/personal-info.component';
import { PaymentsComponent } from './components/pages/me/payments/payments.component';
import { AddressesComponent } from './components/pages/me/addresses/addresses.component';
import { OrderHistoryComponent } from './components/pages/me/order-history/order-history.component';
import { MyPromoCodesComponent } from './components/pages/me/my-promo-codes/my-promo-codes.component';
import { HttpClientModule } from '@angular/common/http';
import {MatMenuModule} from "@angular/material/menu";
import {CustomerService} from "./services/customer.service";
import { ProfileInfoEditComponent } from './components/dialogs/profile-info-edit/profile-info-edit.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    RestaurantCardComponent,
    CarouselComponent,
    MeComponent,
    PersonalInfoComponent,
    PaymentsComponent,
    AddressesComponent,
    OrderHistoryComponent,
    MyPromoCodesComponent,
    ProfileInfoEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatChipsModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatTabsModule,
    HttpClientModule,
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [
    AuthService,
    CustomerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
