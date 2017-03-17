import { AuthHttp } from 'angular2-jwt';
import { ICheatsheet } from '../interfaces/icheatsheet';
import { SERVER_URL } from '../../constants';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CheatsheetService {

  constructor(private http: Http, private _authHttp: AuthHttp) { }

  getLatest(max: number): Observable<ICheatsheet[]> {
    return this.http.get(SERVER_URL + '/cheatsheets/latest/'+ max)
    .map((response: Response) => {
      return <ICheatsheet[]>response.json().cheatsheets;
    }).catch((error) => Observable.throw("Error getting latest cheatsheets"));
  }

  getAll(): Observable<ICheatsheet[]> {
    return this.http.get(SERVER_URL + '/cheatsheets')
    .map((response: Response) => {
      return <ICheatsheet[]>response.json().cheatsheets;
    }).catch((error) => Observable.throw("Error getting cheatsheets"));
  }

  getOnly(id: number): Observable<ICheatsheet> {
    return this.http.get(SERVER_URL + '/cheatsheets/' + id)
    .map((response: Response) => {
      return <ICheatsheet>response.json().cheatsheet;
    }).catch((error) => Observable.throw("Error getting cheatsheet"));
  }

  create(cheatsheet: ICheatsheet): Observable<ICheatsheet> {
    return this._authHttp.post(SERVER_URL + '/cheatsheets', cheatsheet)
    .map((response: Response) => <ICheatsheet>response.json().cheatsheet)
    .catch((error) => Observable.throw("Error creating cheatsheet"));
  }

  edit(cheatsheet: ICheatsheet): Observable<ICheatsheet> {
    return Observable.throw('');
  }

  delete(id:number): Observable<boolean> {
    return this._authHttp.delete(SERVER_URL + '/cheatsheets/' + id)
    .map((response: Response) => true)
    .catch((error) => Observable.throw("Error delete cheatsheet"));
  }

}
