import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Anime } from './anime.entity';
import { CreateAnimeDto, UpdateAnimeDto } from './anime.dto';

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

  async update(id: number, updateAnimeDto: UpdateAnimeDto): Promise<Anime> {
    const anime = await this.animeRepository.findOneBy({ id });
    if (!anime) {
      throw new NotFoundException(`Anime with ID ${id} not found`);
    }

    Object.assign(anime, updateAnimeDto);
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
