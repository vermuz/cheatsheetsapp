import { IUser } from '../interfaces/iuser';
import { SERVER_URL } from '../../constants';
import { Observable } from 'rxjs/Rx';
import { AuthHttp } from 'angular2-jwt';
import { Http, Response } from '@angular/http';
import { EventEmitter, Injectable } from '@angular/core';

export const profile$: EventEmitter<IUser> = new EventEmitter<IUser>();

@Injectable()
export class AuthService {
  private logged: boolean = false;
  private user: IUser = null;

  constructor(private _http: Http, private _authHttp: AuthHttp) { }

  private setLogged(logged: boolean, token: string = '') {
    this.logged = logged;
    if (logged && token) {
      localStorage.setItem('id_token', token);
    } else if (!logged) {
      localStorage.removeItem('id_token');
    }

    if(logged) {
      this.getLoggedUser().subscribe(() => {
        profile$.emit(this.user);
      });
    }else {
      this.user = null;
      profile$.emit(null);
    }
  }

  private getLoggedUser(): Observable<boolean> {
    return this._authHttp.get(SERVER_URL + '/users/profile').map(
      res => {
        this.user = <IUser>res.json().user;
        return Observable.of(true);
      }
    ).catch(() => Observable.of(false));
  }

  isLogged(): Observable<boolean> {
    if (!this.logged && localStorage.getItem('id_token')) {
      return this._authHttp.get(SERVER_URL + '/auth/token')
        .map((response: Response) => {
          return true;
        })
        .catch((response: Response) => Observable.of(false))
        .do(logged => this.setLogged(logged));
    }
    return Observable.of(this.logged);
  }

  getProfile(): Observable<IUser> {
    if(this.user) return Observable.of(this.user);

    return this.isLogged()
      .flatMap((isLogged:boolean) => {
        return this.getLoggedUser().map(
          ok => this.user
        );
      })
      .catch(error => Observable.of(null));
  }

  reloadProfile() {
    this.setLogged(true);
  }

  login(email: string, password: string): Observable<boolean> {
    return this._http.post(SERVER_URL + '/auth/login', {email, password})
    .map((response:Response) => {
      this.setLogged(true, response.json().token);
      return true;
    })
    .catch((error) => Observable.throw("Login error"));
  }

  logout() {
    this.setLogged(false);
  }

}
