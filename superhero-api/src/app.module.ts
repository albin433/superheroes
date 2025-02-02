import { Module } from '@nestjs/common';
import { SuperheroesController } from './superheroes/superheroes.controller';
import { SuperheroesService } from './superheroes/superheroes.service';
import { SuperheroesRepository } from './superheroes/superheroes.repository';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, SuperheroesController],
  providers: [AppService, SuperheroesService, SuperheroesRepository],
})
export class AppModule {}
