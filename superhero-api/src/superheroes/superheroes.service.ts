import { Injectable } from '@nestjs/common';
import { SuperheroesRepository } from './superheroes.repository';
import { SuperheroDto } from './dto/superhero.dto';

@Injectable()
export class SuperheroesService {
  constructor(private readonly superheroesRepository: SuperheroesRepository) {}

  /**
   * Add a new superhero to the list of superheroes logic.
   */
  addSuperhero(superhero: SuperheroDto) {
    this.superheroesRepository.add(superhero);
  }

  /**
   * Get all superheroes logic.
   */
  getSuperheroes(): SuperheroDto[] {
    return this.superheroesRepository.getAll();
  }
}
