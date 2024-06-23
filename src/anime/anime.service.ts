import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Anime } from './anime.entity';
import { CreateAnimeDto } from './anime.dto';

@Injectable()
export class AnimeService {
  constructor(
    @InjectRepository(Anime)
    private animeRepository: Repository<Anime>,
  ) {}

  async create(createAnimeDto: CreateAnimeDto): Promise<Anime> {
    const anime = this.animeRepository.create(createAnimeDto);
    return this.animeRepository.save(anime);
  }

  findAll(): Promise<Anime[]> {
    return this.animeRepository.find();
  }

  findOne(id: number): Promise<Anime | null> {
    return this.animeRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.animeRepository.delete(id);
  }
}
