import { IsInt, IsString, Min, Max, IsNotEmpty } from 'class-validator';

export class SuperheroDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  superpower: string;

  @IsInt()
  @Min(1)
  @Max(10)
  @IsNotEmpty()
  humilityScore: number;
}
