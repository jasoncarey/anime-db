import { PartialType } from '@nestjs/swagger';
import { IsString, IsInt, Min, Max } from 'class-validator';

// Annotations provide *runtime* validation
export class CreateAnimeDto {
  @IsString()
  name: string;

  /**
   * The description of the anime
   * @example This
   */
  @IsString()
  description: string;

  /**
   * The release year of the anime
   * @example 2024
   */
  @IsInt()
  @Min(1900)
  @Max(2100)
  releaseYear: string;

  @IsString()
  genre: string;

  @IsString()
  studio: string;
}

export class UpdateAnimeDto extends PartialType(CreateAnimeDto) {}
