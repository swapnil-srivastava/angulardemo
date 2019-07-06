import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// third party modules
import { AngularFireModule, FirebaseAppConfig } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';

// shared modules
import { SharedModule } from './shared/shared.module';

export const ROUTES: Routes = [
  {
    path: 'auth',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'login'},
      { path: 'login', loadChildren: './login/login.module#LoginModule' },
      { path: 'register', loadChildren: './register/register.module#RegisterModule' }
    ]
  }
];

export const fireConfig: FirebaseAppConfig = {
  apiKey: 'AIzaSyCPcPiPTzHQ_AbeGShr7SGbLABw6A74WFQ',
  authDomain: 'swapnilsrivastava-c1748.firebaseapp.com',
  databaseURL: 'https://swapnilsrivastava-c1748.firebaseio.com',
  projectId: 'swapnilsrivastava-c1748',
  storageBucket: 'swapnilsrivastava-c1748.appspot.com',
  messagingSenderId: '511527106927'
};


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    AngularFireModule.initializeApp(fireConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    SharedModule.forRoot()
  ],
  declarations: []
})
export class AuthModule { }
