import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';


const routes: Routes = [
  { path: 'home', component: MainDashboardComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  // commenting the 404 path in the routing
  // { path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
