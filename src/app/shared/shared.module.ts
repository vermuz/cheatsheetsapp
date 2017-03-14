import { FormsModule } from '@angular/forms';
import { UserService } from './providers/user.service';
import { CanActivateAdminService } from './can-activate/can-activate-admin.service';
import { CanActivateLoggedService } from './can-activate/can-activate-logged.service';
import { CanActivateLoginService } from './can-activate/can-activate-login.service';
import { CheatsheetService } from './providers/cheatsheet.service';
import { CategoryService } from './providers/category.service';
import { AuthService } from './providers/auth.service';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordModalComponent } from './modals/password-modal/password-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [PasswordModalComponent],
  exports: [PasswordModalComponent],
  entryComponents: [PasswordModalComponent]
})
export class SharedModule { 
  static forRoot(): ModuleWithProviders {
  return {
    ngModule: SharedModule,
    providers: [
      AuthService,
      CategoryService,
      UserService,
      CheatsheetService,
      CanActivateLoginService,
      CanActivateLoggedService,
      CanActivateAdminService
    ]
  };
}
}
