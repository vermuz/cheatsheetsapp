import { ILanguage } from '../interfaces/ilanguage';
import { AuthHttp } from 'angular2-jwt';
import { Http, Response } from '@angular/http';
import { SERVER_URL } from '../../constants';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class LanguageService {

  constructor(private http: Http, private _authHttp: AuthHttp) { }
  
  getAll(): Observable<ILanguage[]> {
    return this.http.get(SERVER_URL + '/languages')
    .map((response: Response) => {
      return <ILanguage[]>response.json().languages;
    }).catch((error) => Observable.throw("Error getting languages"));
  }

  create(name: string, extension: string): Observable<ILanguage> {
    return this._authHttp.post(SERVER_URL + '/languages', {name, extension})
    .map((response: Response) => <ILanguage>response.json().language)
    .catch((error) => Observable.throw("Error create language"));
  }

  edit(id:number, name: string, extension: string): Observable<ILanguage> {
    return this._authHttp.put(SERVER_URL + '/languages/' + id, {name, extension})
    .map((response: Response) => <ILanguage>response.json().language)
    .catch((error) => Observable.throw("Error edit language"));
  }

  delete(id:number): Observable<boolean> {
    return this._authHttp.delete(SERVER_URL + '/languages/' + id)
    .map((response: Response) => true)
    .catch((error) => Observable.throw("Error delete language"));
  }

}
