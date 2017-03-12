import { SERVER_URL } from '../../constants';
import { Observable } from 'rxjs/Rx';
import { ICategory } from '../interfaces/icategory';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoryService {

  constructor(private http: Http) { }

  getList(): Observable<ICategory[]> {
    return this.http.get(SERVER_URL + '/categories/list')
    .map((response: Response) => {
      return <ICategory[]>response.json().categories;
    }).catch((error) => Observable.throw("Error getting categories"));
  }
}
