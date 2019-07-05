import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// Container
import { AuthformComponent } from './container/authform/authform.component';

// Services
import { AuthService } from './services/auth.service';

// Material Module
import { MatInputModule, MatButtonModule, MatCardModule } from '@angular/material';

// Angular Flex Layout Module Beta
import { FlexLayoutModule } from '@angular/flex-layout';

export const ROUTES: Routes = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCardModule
  ],
  declarations: [
    AuthformComponent
  ],
  exports: [
    AuthformComponent,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCardModule
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
