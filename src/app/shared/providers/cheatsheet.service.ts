import { ICheatsheet } from '../interfaces/icheatsheet';
import { SERVER_URL } from '../../constants';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CheatsheetService {

  constructor(private http: Http) { }

  getLatest(max: number): Observable<ICheatsheet[]> {
    return this.http.get(SERVER_URL + '/cheatsheets/latest/'+ max)
    .map((response: Response) => {
      return <ICheatsheet[]>response.json().cheatsheets;
    }).catch((error) => Observable.throw("Error getting latest cheatsheets"));
  }

}
