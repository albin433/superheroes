import { Injectable } from '@nestjs/common';
import { SuperheroDto } from './dto/superhero.dto';


@Injectable()
export class SuperheroesRepository {
  private superheroes: SuperheroDto[] = [];

  /**
   * Adds a new superhero to the list of superheroes.
   * 
   * @param {SuperheroDto} superhero - The superhero object to be added.
   */
  add(superhero: SuperheroDto) {
    this.superheroes.push(superhero);
  }

  /**
   * Retrieves all superheroes, sorted by their humility score in descending order.
   * 
   * @returns {SuperheroDto[]} Sorted array of superhero objects.
   */
  getAll(): SuperheroDto[] {
    return this.superheroes.sort((a, b) => b.humilityScore - a.humilityScore);
  }
}
