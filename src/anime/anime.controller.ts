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
import { CreateAnimeDto } from './dto';
import { AnimeService } from './anime.service';
import { Anime } from './interfaces/anime.interface';

@Controller('anime')
export class AnimeController {
  constructor(private animeService: AnimeService) {}

  /**
   * Create a new anime record
   */
  @Post()
  create(@Body() createAnimeDto: CreateAnimeDto) {
    console.log(createAnimeDto);
    return 'This action adds a new anime';
  }

  @Get()
  async findAll(): Promise<Anime[]> {
    return this.animeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Anime> {
    return this.animeService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateAnimeDto: CreateAnimeDto) {
    console.log(updateAnimeDto);
    return `This action updates a #${id} anime`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} anime`;
  }
}
