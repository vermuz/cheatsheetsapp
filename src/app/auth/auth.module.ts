import { CanActivateLoginService } from '../shared/can-activate/can-activate-login.service';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

const authRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [CanActivateLoginService]
  },
  { path: '',   redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(authRoutes)
  ],
  declarations: [LoginComponent],
  exports: [RouterModule]
})
export class AuthModule { }
