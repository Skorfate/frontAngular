import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Character } from './../model/Character.model';
import { environment } from './../../environments/environment';

const API_URL = environment.apiUrl;

@Injectable()
export class CharacterService {
    constructor(private _http: HttpClient) { }
    getLuke(): Observable<Character> {
        return this._http.get(API_URL + '/api/luke').map(response => {
            const character = response;
            let ch = new Character(character);
            console.log('ch', ch);
            return ch;
        });
    }

    getDarthVader(): Observable<Character> {
        return this._http.get(API_URL + '/api/luke').map(response => {
            const character = response;
            let ch = new Character(character);
            console.log('ch', ch);
            return ch;
        });
    }
}
