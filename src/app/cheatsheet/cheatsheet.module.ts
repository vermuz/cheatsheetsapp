import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheatsheetListComponent } from './cheatsheet-list/cheatsheet-list.component';

const cheatsheetRoutes: Routes = [
  {
    path: '',
    component: CheatsheetListComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(cheatsheetRoutes)
  ],
  declarations: [CheatsheetListComponent],
  exports: [RouterModule]
})
export class CheatsheetModule { }
