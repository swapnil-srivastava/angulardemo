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
import { PaymentPageComponent } from './container/payment-page/payment-page.component';

import { StoreModule } from '@ngrx/store';

import { reducers, metaReducers } from './store/reducers';

import { EffectsModule } from '@ngrx/effects';

import { AppEffects } from './app.effects';

import { StoreRouterConnectingModule } from '@ngrx/router-store';

// Not to be used in production
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Angular i18n
// import localeFr from '@angular/common/locales/fr';
// import localeFr from '@angular/common/locales/;


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    MainDashboardComponent,
    AboutMeComponent,
    ContactMeComponent,
    PaymentPageComponent
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
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([AppEffects]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

