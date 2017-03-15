import { Observable } from 'rxjs/Rx';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../providers/user.service';
import { IUser } from '../interfaces/iuser';
import { Resolve } from '@angular/router/src/interfaces';
import { Injectable } from '@angular/core';

@Injectable()
export class ProfileResolveService implements Resolve<IUser> {

   constructor(
    private usersService: UserService,
    private router:Router,
    private _userService: UserService
    ) { }

    resolve(
      route: ActivatedRouteSnapshot, 
      state: RouterStateSnapshot
      ): IUser | Observable<IUser> | Promise<IUser> {
      return this._userService.getProfile()
      .catch(error => {
        this.router.navigate(['/home']);
        return Observable.of(null)
      });
    }

}
