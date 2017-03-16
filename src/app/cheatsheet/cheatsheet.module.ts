import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheatsheetListComponent } from './cheatsheet-list/cheatsheet-list.component';
import { CheatsheetNewComponent } from './cheatsheet-new/cheatsheet-new.component';
import { CheatsheetEditComponent } from './cheatsheet-edit/cheatsheet-edit.component';

const cheatsheetRoutes: Routes = [
  {
    path: '',
    component: CheatsheetListComponent
  },
  {
    path: 'new',
    component: CheatsheetNewComponent
  },
  {
    path: 'edit/:id',
    component: CheatsheetEditComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(cheatsheetRoutes)
  ],
  declarations: [CheatsheetListComponent, CheatsheetNewComponent, CheatsheetEditComponent],
  exports: [RouterModule]
})
export class CheatsheetModule { }
