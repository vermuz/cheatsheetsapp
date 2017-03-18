import { Observable } from 'rxjs/Rx';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { CategoryService } from '../providers/category.service';
import { Resolve } from '@angular/router/src/interfaces';
import { ICategory } from '../interfaces/icategory';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoryResolveService implements Resolve<ICategory> {

  constructor(
    private _categoryService: CategoryService,
    private router:Router
    ) { }

    resolve(
      route: ActivatedRouteSnapshot, 
      state: RouterStateSnapshot
      ): ICategory | Observable<ICategory> | Promise<ICategory> {
      return this._categoryService.getOnly(route.params['id'])
      .catch(error => {
        this.router.navigate(['/home']);
        return Observable.of(null)
      });
    }

}
