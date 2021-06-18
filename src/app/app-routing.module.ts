import { LandingComponent } from './components/landing/landing.component';
import { ActivationComponent } from './components/activation/activation.component';
import { RegistrationComponent } from './components/registration/registration.component';


import { LoginComponent } from './components/login/login.component'
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';


const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'activation', component: ActivationComponent},
  { path: 'home', component: LandingComponent},
  { path: 'category-details', component:CategoryDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ RegistrationComponent, LoginComponent , ActivationComponent, LandingComponent]