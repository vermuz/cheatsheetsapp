import { CheatsheetService } from './providers/cheatsheet.service';
import { CategoryService } from './providers/category.service';
import { AuthService } from './providers/auth.service';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class SharedModule { 
  static forRoot(): ModuleWithProviders {
  return {
    ngModule: SharedModule,
    providers: [
      AuthService,
      CategoryService,
      CheatsheetService
    ]
  };
}
}
