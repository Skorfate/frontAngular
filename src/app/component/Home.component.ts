import { Component } from '@angular/core';
import { CharacterService } from './../service/character.service';
import { Character } from './../model/Character.model';

@Component({
  selector: 'home',
  templateUrl: './../view/home.component.html',
  styleUrls: ['./../style/home.component.scss'],
  providers: [CharacterService]
})
export class HomeComponent {
  characterLuke : Character;
  characterDarthVader : Character;
  l

  constructor(private _characterService: CharacterService) {   
    this.characterLuke = new Character();
    this.characterDarthVader = new Character();
  }

  ngOnInit() {
    this._characterService.getLuke().subscribe(
      (character) => this.characterLuke = character );
  
    this._characterService.getDarthVader().subscribe(
    (character) => this.characterDarthVader = character );

    
  }

}
