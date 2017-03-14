import { IUser } from '../interfaces/iuser';
import { AuthService } from '../providers/auth.service';
import { Observable } from 'rxjs/Rx';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class CanActivateAdminService  implements CanActivate {
  constructor(private router: Router, private _authService: AuthService) { }

  canActivate(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    return this._authService.getProfile()
    .map(user => {
      if(user && user.admin) return true;
      this.router.navigate(['/auth/login']);
    })
    .catch(error => this.router.navigate(['/auth/login']))
    ;
  }
}
