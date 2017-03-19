import { CanActivateLoggedService } from '../shared/can-activate/can-activate-logged.service';
import { CategoryResolveService } from '../shared/resolve/category-resolve.service';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheatsheetListComponent } from './cheatsheet-list/cheatsheet-list.component';
import { CheatsheetNewComponent } from './cheatsheet-new/cheatsheet-new.component';
import { CheatsheetEditComponent } from './cheatsheet-edit/cheatsheet-edit.component';
import { CheatsheetResolveService } from "../shared/resolve/cheatsheet-resolve.service";
import { CheatsheetViewComponent } from './cheatsheet-view/cheatsheet-view.component';
import { CheatsheetCategoryListComponent } from './cheatsheet-category-list/cheatsheet-category-list.component';

const cheatsheetRoutes: Routes = [
  {
    path: '',
    component: CheatsheetListComponent
  },
  {
    path: 'new',
    component: CheatsheetNewComponent,
    canActivate: [CanActivateLoggedService]
  },
  {
    path: 'edit/:id',
    component: CheatsheetEditComponent,
    canActivate: [CanActivateLoggedService],
    resolve: { cheatsheet: CheatsheetResolveService }
  },
  {
    path: 'category/:id',
    component: CheatsheetCategoryListComponent,
    resolve: { category: CategoryResolveService }
  },
  {
    path: ':id',
    component: CheatsheetViewComponent,
    resolve: { cheatsheet: CheatsheetResolveService }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(cheatsheetRoutes)
  ],
  declarations: [CheatsheetListComponent, CheatsheetNewComponent, CheatsheetEditComponent, CheatsheetViewComponent, CheatsheetCategoryListComponent],
  exports: [RouterModule]
})
export class CheatsheetModule { }
