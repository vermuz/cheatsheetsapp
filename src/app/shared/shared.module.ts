import { CategoryResolveService } from './resolve/category-resolve.service';
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
import { TinymceComponent } from './tinymce/tinymce.component';
import { AceeditorComponent } from './aceeditor/aceeditor.component';
import { AceEditorEventsService } from "./aceeditor/ace-editor-events";
import { CheatsheetResolveService } from "./resolve/cheatsheet-resolve.service";
import { CheatsheetPipe } from './pipes/cheatsheet.pipe';
import { CategoryPipe } from './pipes/category.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [PasswordModalComponent, InputModalComponent, LanguageModalComponent, TinymceComponent, AceeditorComponent, CheatsheetPipe, CategoryPipe],
  exports: [PasswordModalComponent, InputModalComponent, LanguageModalComponent, TinymceComponent, AceeditorComponent, CheatsheetPipe, CategoryPipe],
  entryComponents: [PasswordModalComponent, InputModalComponent, LanguageModalComponent, TinymceComponent, AceeditorComponent]
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
      AceEditorEventsService,
      CanActivateLoginService,
      CanActivateLoggedService,
      CanActivateAdminService,
      ProfileResolveService,
      CheatsheetResolveService,
      CategoryResolveService
    ]
  };
}
}
