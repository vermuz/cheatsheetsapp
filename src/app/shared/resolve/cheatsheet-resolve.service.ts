import { Observable } from 'rxjs/Rx';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Resolve } from '@angular/router/src/interfaces';
import { Injectable } from '@angular/core';
import { ICheatsheet } from "../interfaces/icheatsheet";
import { CheatsheetService } from "../providers/cheatsheet.service";

@Injectable()
export class CheatsheetResolveService implements Resolve<ICheatsheet> {

   constructor(
    private _cheatsheetService: CheatsheetService,
    private router:Router
    ) { }

    resolve(
      route: ActivatedRouteSnapshot, 
      state: RouterStateSnapshot
      ): ICheatsheet | Observable<ICheatsheet> | Promise<ICheatsheet> {
      return this._cheatsheetService.getOnly(route.params['id'])
      .catch(error => {
        this.router.navigate(['/home']);
        return Observable.of(null)
      });
    }

}
