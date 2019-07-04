import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MainNavComponent } from './main-nav/main-nav.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';

// Angular Material Module
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule, MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatSlideToggleModule,
  MatExpansionModule
} from '@angular/material';

// Angular CDK Modules
import { LayoutModule } from '@angular/cdk/layout';

// Feature Module
import { AuthModule } from '../auth/auth.module';

// Angular Flex Layout Module Beta
import { FlexLayoutModule } from '@angular/flex-layout';

// Angular PWA
// Note: Service worker will make the server side render not work
// for the basic route in this case its "/home" but after deleting the
// cache and going directly to the route it would render the page
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AboutMeComponent } from './container/about-me/about-me.component';
import { ContactMeComponent } from './container/contact-me/contact-me.component';

// Angular i18n
// import localeFr from '@angular/common/locales/fr';
// import localeFr from '@angular/common/locales/;


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    MainDashboardComponent,
    AboutMeComponent,
    ContactMeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
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
    MatSlideToggleModule,
    MatExpansionModule,
    AuthModule,
    FlexLayoutModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

