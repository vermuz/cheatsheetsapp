import { LanguageService } from './providers/language.service';
import { ProfileResolveService } from './resolve/profile-resolve.service';
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
import { InputModalComponent } from './modals/input-modal/input-modal.component';
import { LanguageModalComponent } from './modals/language-modal/language-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [PasswordModalComponent, InputModalComponent, LanguageModalComponent],
  exports: [PasswordModalComponent, InputModalComponent, LanguageModalComponent],
  entryComponents: [PasswordModalComponent, InputModalComponent, LanguageModalComponent]
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
      LanguageService,
      CanActivateLoginService,
      CanActivateLoggedService,
      CanActivateAdminService,
      ProfileResolveService
    ]
  };
}
}
