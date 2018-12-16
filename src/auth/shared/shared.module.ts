import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// Container
import { AuthformComponent } from './container/authform/authform.component';

// Services
import { AuthService } from './services/auth.service';

// Material Module
import { MatInputModule, MatButtonModule } from '@angular/material';

export const ROUTES: Routes = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [
    AuthformComponent
  ],
  exports: [
    AuthformComponent,
    MatInputModule,
    MatButtonModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        AuthService
      ]
    };
  }
 }
