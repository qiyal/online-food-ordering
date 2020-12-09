import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignInComponent} from './components/pages/sign-in/sign-in.component';
import {SignUpComponent} from './components/pages/sign-up/sign-up.component';
import {HomeComponent} from './components/pages/home/home.component';
import {MeComponent} from './components/pages/me/me.component';
import {CarouselComponent} from './components/part/carousel/carousel.component';
import {PersonalInfoComponent} from './components/pages/me/personal-info/personal-info.component';
import {PaymentsComponent} from './components/pages/me/payments/payments.component';
import {AddressesComponent} from './components/pages/me/addresses/addresses.component';
import {OrderHistoryComponent} from './components/pages/me/order-history/order-history.component';
import {MyPromoCodesComponent} from './components/pages/me/my-promo-codes/my-promo-codes.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'me',
    component: MeComponent,
    children: [
      {
        path: 'personal-info',
        component: PersonalInfoComponent
      },
      {
        path: 'payments',
        component: PaymentsComponent
      },
      {
        path: 'addresses',
        component: AddressesComponent
      },
      {
        path: 'order-history',
        component: OrderHistoryComponent
      },
      {
        path: 'my-promo-codes',
        component: MyPromoCodesComponent
      }
    ]
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
