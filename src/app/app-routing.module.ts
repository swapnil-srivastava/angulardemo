import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { AboutMeComponent } from './container/about-me/about-me.component';
import { ContactMeComponent } from './container/contact-me/contact-me.component';
import { PaymentPageComponent } from './container/payment-page/payment-page.component';
import { AuthGuard } from '../auth/shared/services/auth.guard';


const routes: Routes = [
  { path: 'home', component: MainDashboardComponent },
  { path: 'about', component: AboutMeComponent, canActivate: [AuthGuard]},
  { path: 'contact', component: ContactMeComponent, canActivate: [AuthGuard] },
  { path: 'payment', component: PaymentPageComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  // commenting the 404 path in the routing
  // { path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
