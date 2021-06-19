import { SendmoneyComponent } from './components/payment/sendmoney/sendmoney.component';

import { TillnumberComponent } from './components/payment/tillnumber/tillnumber.component';
import { PaybillComponent } from './components/payment/paybill/paybill.component';


import { LandingComponent } from './components/landing/landing.component';
import { ActivationComponent } from './components/activation/activation.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component'
import { PaymentComponent } from './components/payment/payment.component'
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';




const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'activation', component: ActivationComponent},
  { path: 'home', component: LandingComponent},
  { path: 'payment', component: PaymentComponent, 
      children: [
        { path: 'sendmoney', component: SendmoneyComponent},
        { path: 'paybill', component: PaybillComponent},
        { path: 'till', component: TillnumberComponent},
      ]
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ RegistrationComponent, LoginComponent , ActivationComponent, LandingComponent, PaymentComponent , PaybillComponent , TillnumberComponent, SendmoneyComponent]