import { AuthService } from '../providers/auth.service';
import { Observable } from 'rxjs/Rx';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class CanActivateLoginService implements CanActivate {

  constructor(private router: Router, private _authService: AuthService) { }

  canActivate(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    return this._authService.isLogged()
      .map(isLogged => !isLogged)
      .do(isLogged => { if (!isLogged) this.router.navigate(['/']); })
  }
}
