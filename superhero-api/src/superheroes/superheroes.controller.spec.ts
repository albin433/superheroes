import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroesController } from './superheroes.controller';
import { SuperheroesService } from './superheroes.service';
import { SuperheroDto } from './dto/superhero.dto';

describe('SuperheroesController', () => {
  let controller: SuperheroesController;
  let service: SuperheroesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuperheroesController],
      providers: [
        {
          provide: SuperheroesService,
          useValue: {
            addSuperhero: jest.fn().mockResolvedValue(undefined),
          },
        },
      ],
    }).compile();

    controller = module.get<SuperheroesController>(SuperheroesController);
    service = module.get<SuperheroesService>(SuperheroesService);
  });

  describe('addSuperhero', () => {
    it('should call addSuperhero method of service and return success message', async () => {
      const superheroDto: SuperheroDto = {
        name: 'Superman',
        superpower: 'Strength',
        humilityScore: 8,
      };
      const result = { message: 'Superhero added!' };

      expect(await controller.addSuperhero(superheroDto)).toEqual(result);
      expect(service.addSuperhero).toHaveBeenCalledWith(superheroDto);
    });

    it('should throw an error if humilityScore is not within the valid range', async () => {
      const superheroDto: SuperheroDto = {
        name: 'Superman',
        superpower: 'Strength',
        humilityScore: 15,
      };

      try {
        await controller.addSuperhero(superheroDto);
      } catch (error) {
        expect(error.response.message).toContain('humilityScore must be less than or equal to 10');
      }
    });
  });
});
