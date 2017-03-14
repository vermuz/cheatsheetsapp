import { Response } from '@angular/http';
import { IUser } from '../interfaces/iuser';
import { Observable } from 'rxjs/Rx';
import { SERVER_URL } from '../../constants';
import { AuthHttp } from 'angular2-jwt';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor(private _authHttp: AuthHttp) { }

  getAll(): Observable<IUser[]> {
    return this._authHttp.get(SERVER_URL + '/users')
    .map((response: Response) => {
      return <IUser[]>response.json().users;
    }).catch((error) => Observable.throw("Error getting users list"));
  }

}
