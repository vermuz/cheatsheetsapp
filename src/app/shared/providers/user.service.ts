import { AuthService } from './auth.service';
import { Response } from '@angular/http';
import { IUser } from '../interfaces/iuser';
import { Observable } from 'rxjs/Rx';
import { SERVER_URL } from '../../constants';
import { AuthHttp } from 'angular2-jwt';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor(private _authHttp: AuthHttp, private _authService: AuthService) { }

  getAll(): Observable<IUser[]> {
    return this._authHttp.get(SERVER_URL + '/users')
    .map((response: Response) => {
      return <IUser[]>response.json().users;
    }).catch((error) => Observable.throw("Error getting users list"));
  }

  password(id: number, password: string) {
    return this._authHttp.put(SERVER_URL + '/users/' + id + '/password', {password})
    .map((response: Response) => true)
    .catch((error) => Observable.throw("Error change password"));
  }

  deactivate(id: number): Observable<boolean> {
    return this._authHttp.delete(SERVER_URL + '/users/' + id)
    .map((response: Response) => true)
    .catch((error) => Observable.throw("Error deactivate user"));
  }

  activate(id: number): Observable<IUser> {
    return this._authHttp.put(SERVER_URL + '/users/' + id + '/activate', null)
    .map((response: Response) => response.json().user)
    .catch((error) => Observable.throw("Error activate user"));
  
  }

  setIsAdmin(id: number, isAdmin: boolean): Observable<boolean> {
    return this._authHttp.put(SERVER_URL + '/users/' + id + '/admin', {admin: isAdmin})
    .map((response: Response) => true)
    .catch((error) => Observable.throw("Error change is admin user"));
  }

}
