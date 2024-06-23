import { PartialType } from '@nestjs/swagger';
import {
  IsString,
  IsInt,
  Min,
  Max,
  IsArray,
  ArrayNotEmpty,
  ArrayMinSize,
  ArrayMaxSize,
} from 'class-validator';

// Annotations provide *runtime* validation
export class CreateAnimeDto {
  /**
   * The title of the anime
   * @example "Sousou no Frieren"
   */
  @IsString()
  title: string;

  /**
   * The description of the anime
   * @example "An elven mage embarks on a journey to understand humanity and come to terms with her emotions after the death of her heroic comrades"
   */
  @IsString()
  description: string;

  /**
   * The release year of the anime
   * @example 2023
   */
  @IsInt()
  @Min(1900)
  @Max(new Date().getFullYear() + 1)
  releaseYear: string;

  /**
   * The genre of the anime
   * @example ["Fantasy", "Adventure"]
   */
  @IsArray()
  @ArrayNotEmpty()
  @ArrayMinSize(1)
  @ArrayMaxSize(5)
  @IsString({ each: true })
  genre: string[];

  /**
   * The studio that produced the anime
   * @example Madhouse
   */
  @IsString()
  studio: string;
}

export class UpdateAnimeDto extends PartialType(CreateAnimeDto) {}
