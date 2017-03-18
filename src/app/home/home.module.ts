import { FormsModule } from '@angular/forms';
import { CheatsheetPipe } from '../shared/pipes/cheatsheet.pipe';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(homeRoutes)
  ],
  declarations: [HomeComponent],
  exports: [RouterModule]
})
export class HomeModule { }
