import { Component, OnInit } from '@angular/core';
import { CharacterService } from './../service/character.service';
import { Character } from './../model/Character.model';
import { environment } from './../../environments/environment';
const API_URL = environment.apiUrl;

@Component({
  selector: 'app-home',
  templateUrl: './../view/home.component.html',
  styleUrls: ['./../style/home.component.scss'],
  providers: [CharacterService]
})
export class HomeComponent implements OnInit {
  characterLuke: Character;
  characterDarthVader: Character;
  urlImgLuke: string;
  urlImgDarth: string;
  constructor(private _characterService: CharacterService) {
    this.characterLuke = new Character();
    this.characterDarthVader = new Character();
    this.urlImgLuke = API_URL + '/image/luke';
    this.urlImgDarth = API_URL + '/image/darthVader';
  }

  ngOnInit() {
    this._characterService.getLuke().subscribe(
      (character) => this.characterLuke = character );
    this._characterService.getDarthVader().subscribe(
    (character) => this.characterDarthVader = character );
  }

}
