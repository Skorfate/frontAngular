import { TestBed, async, inject } from '@angular/core/testing';
import { CharacterService } from './../service/character.service'
import { HomeComponent } from './../component/Home.component';
import { Character } from './../model/Character.model';
import { HttpClientModule } from '@angular/common/http';
describe('HomeComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent
      ],
      imports: [HttpClientModule],
      providers: [CharacterService]
    }).compileComponents();
  }));
  it('injectamos el servicio', inject([CharacterService], (characterService: CharacterService) => {
    expect(characterService).toBeTruthy();
  }));
  it('buscame la data de darth', inject([CharacterService], (characterService: CharacterService) => {
   const name = 'Darth Vader';
    let characterVader;
    characterService.getDarthVader().subscribe(
        (character) => {this.characterVader = character ;
            expect(this.characterVader.name).toEqual(name);
        });
  }));
  it('buscame la data de Luke', inject([CharacterService], (characterService: CharacterService) => {
    const name = 'Luke';
     let characterLuke;
     characterService.getDarthVader().subscribe(
         (character) => {this.characterVader = character ;
             expect(this.characterLuke.name).toEqual(name);
         });
   }));
});
