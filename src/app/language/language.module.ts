import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageListComponent } from './language-list/language-list.component';

const languageRoutes: Routes = [
  {
    path: '',
    component: LanguageListComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(languageRoutes)
  ],
  declarations: [LanguageListComponent],
  exports: [RouterModule]
})
export class LanguageModule { }
