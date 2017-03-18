import { AuthHttp } from 'angular2-jwt';
import { SERVER_URL } from '../../constants';
import { Observable } from 'rxjs/Rx';
import { ICategory } from '../interfaces/icategory';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoryService {

  constructor(private http: Http, private _authHttp: AuthHttp) { }

  getList(): Observable<ICategory[]> {
    return this.http.get(SERVER_URL + '/categories/list')
    .map((response: Response) => {
      return <ICategory[]>response.json().categories;
    }).catch((error) => Observable.throw("Error getting categories"));
  }

  getAll(): Observable<ICategory[]> {
    return this.http.get(SERVER_URL + '/categories')
    .map((response: Response) => {
      return <ICategory[]>response.json().categories;
    }).catch((error) => Observable.throw("Error getting categories"));
  }

  getOnly(id: number): Observable<ICategory> {
    return this.http.get(SERVER_URL + '/categories/' + id)
    .map((response: Response) => {
      return <ICategory>response.json().category;
    }).catch((error) => Observable.throw("Error getting category"));
  }

  create(name: string): Observable<ICategory> {
    return this._authHttp.post(SERVER_URL + '/categories', {name})
    .map((response: Response) => <ICategory>response.json().category)
    .catch((error) => Observable.throw("Error create category"));
  }

  edit(id:number, name: string): Observable<ICategory> {
    return this._authHttp.put(SERVER_URL + '/categories/' + id, {name})
    .map((response: Response) => <ICategory>response.json().category)
    .catch((error) => Observable.throw("Error edit category"));
  }

  delete(id:number): Observable<boolean> {
    return this._authHttp.delete(SERVER_URL + '/categories/' + id)
    .map((response: Response) => true)
    .catch((error) => Observable.throw("Error delete category"));
  }
}
