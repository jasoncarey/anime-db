import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateAnimeDto, UpdateAnimeDto } from './anime.dto';
import { AnimeService } from './anime.service';
import { Anime } from './anime.interface';

@Controller('anime')
export class AnimeController {
  constructor(private animeService: AnimeService) {}

  /**
   * Create a new anime record
   */
  @Post()
  create(@Body() createAnimeDto: CreateAnimeDto) {
    return this.animeService.create(createAnimeDto);
  }

  /**
   * Retrieve all anime records
   */
  @Get()
  async findAll(): Promise<Anime[]> {
    return this.animeService.findAll();
  }

  /**
   * Retrieve a single anime record
   */
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Anime | null> {
    return this.animeService.findOne(id);
  }

  /**
   * Update an anime record
   */
  @Put(':id')
  update(@Param('id') id: number, @Body() updateAnimeDto: UpdateAnimeDto) {
    return this.animeService.update(id, updateAnimeDto);
  }

  /**
   * Delete an anime record
   */
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.animeService.remove(id);
  }
}
