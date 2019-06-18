import { Component } from '@angular/core';
import { CharacterService } from './../service/character.service';

@Component({
  selector: 'home',
  templateUrl: './../view/home.html',
  providers: [CharacterService]
})
export class HomeComponent {

  constructor(private _characterService: CharacterService) {
  }

  ngOnInit() {
    this._characterService.getPrueba().subscribe(
      result => {
        console.log(result);
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}
