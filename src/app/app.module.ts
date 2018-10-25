import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule, MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatSlideToggleModule
} from '@angular/material';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    MainDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

  // // Initialize Firebase
  // var config = {
  //   apiKey: "AIzaSyCPcPiPTzHQ_AbeGShr7SGbLABw6A74WFQ",
  //   authDomain: "swapnilsrivastava-c1748.firebaseapp.com",
  //   databaseURL: "https://swapnilsrivastava-c1748.firebaseio.com",
  //   projectId: "swapnilsrivastava-c1748",
  //   storageBucket: "swapnilsrivastava-c1748.appspot.com",
  //   messagingSenderId: "511527106927"
  // };
