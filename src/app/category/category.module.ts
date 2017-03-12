import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './category-list/category-list.component';

const categoryRoutes: Routes = [
  {
    path: '',
    component: CategoryListComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(categoryRoutes)
  ],
  declarations: [CategoryListComponent],
  exports: [RouterModule]
})
export class CategoryModule { }
