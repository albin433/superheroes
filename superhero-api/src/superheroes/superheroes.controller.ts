import { Controller, Get, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { SuperheroesService } from './superheroes.service';
import { SuperheroDto } from './dto/superhero.dto';

@Controller('superheroes')
export class SuperheroesController {
  constructor(private readonly superheroesService: SuperheroesService) {}

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  addSuperhero(@Body() superheroDto: SuperheroDto) {
    this.superheroesService.addSuperhero(superheroDto);
    return { message: 'Superhero added!' };
  }

  @Get()
  getSuperheroes() {
    return this.superheroesService.getSuperheroes();
  }
}
