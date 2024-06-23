import { Injectable } from '@nestjs/common';
import { Anime } from './interfaces/anime.interface';

@Injectable()
export class AnimeService {
  private readonly anime: Anime[] = [];

  create(anime: Anime) {
    this.anime.push(anime);
  }

  findAll(): Anime[] {
    return this.anime;
  }

  findOne(id: number): Anime {
    return this.anime[id];
  }
}
