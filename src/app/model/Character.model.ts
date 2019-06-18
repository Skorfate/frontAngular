export class Character {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    image: string;
    species: string;
    vehicles: string;
    starships: string;
    films: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
      }
}
