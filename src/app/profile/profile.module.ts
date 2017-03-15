import { FormsModule } from '@angular/forms';
import { ProfileResolveService } from '../shared/resolve/profile-resolve.service';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';

const userRoutes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    resolve: { user: ProfileResolveService }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [ProfileComponent],
  exports: [RouterModule]
})
export class ProfileModule { }
