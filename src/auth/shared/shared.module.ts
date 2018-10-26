import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// Container
import { AuthformComponent } from './container/authform/authform.component';


export const ROUTES: Routes = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [
    AuthformComponent
  ],
  exports: [
    AuthformComponent
  ]
})
export class SharedModule { }
