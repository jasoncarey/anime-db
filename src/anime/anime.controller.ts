import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateAnimeDto } from './anime.dto';
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
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Anime | null> {
    return this.animeService.findOne(id);
  }

  /**
   * Update an anime record
   */
  @Put(':id')
  update(@Param('id') id: string, @Body() updateAnimeDto: CreateAnimeDto) {
    console.log(updateAnimeDto);
    return `This action updates a #${id} anime`;
  }

  /**
   * Delete an anime record
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} anime`;
  }
}
