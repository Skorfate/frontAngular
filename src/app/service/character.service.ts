import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {catchError, map} from 'rxjs/operators';

@Injectable()
export class CharacterService {
    constructor(private _http: HttpClient) {}
    getPrueba() {
        return this._http.get('http://localhost:9990/api/luke').pipe(map(res => res));
    }
}
