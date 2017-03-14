import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CanActivateAdminService } from './shared/can-activate/can-activate-admin.service';
import { CanActivateLoggedService } from './shared/can-activate/can-activate-logged.service';
import { AuthConfig, AuthHttp } from 'angular2-jwt';
import { SharedModule } from './shared/shared.module';
import { MenuModule } from './menu/menu.module';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule, RequestOptions } from '@angular/http';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
  {
    path: 'home',
    loadChildren: 'app/home/home.module#HomeModule'
  },
  {
    path: 'categories',
    loadChildren: 'app/category/category.module#CategoryModule',
    canActivate: [CanActivateLoggedService]
  },
  {
    path: 'languages',
    loadChildren: 'app/language/language.module#LanguageModule',
    canActivate: [CanActivateLoggedService]
  },
  {
    path: 'cheatsheets',
    loadChildren: 'app/cheatsheet/cheatsheet.module#CheatsheetModule',
    canActivate: [CanActivateLoggedService]
  },
  {
    path: 'users',
    loadChildren: 'app/user/user.module#UserModule',
    canActivate: [CanActivateAdminService]
  },
  {
    path: 'profile',
    loadChildren: 'app/profile/profile.module#ProfileModule',
    canActivate: [CanActivateLoggedService]
  },
  {
    path: 'auth',
    loadChildren: 'app/auth/auth.module#AuthModule'
  },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  //{ path: '**', component: PageNotFoundComponent }
];

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(), http, options);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MenuModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
