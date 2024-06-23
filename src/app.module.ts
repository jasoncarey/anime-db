import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { AnimeModule } from './anime/anime.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { AnimeController } from './anime/anime.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      autoLoadEntities: true,
      synchronize: true,
    }),
    AnimeModule,
  ],
})
export class AppModule implements NestModule {
  constructor(private dataSource: DataSource) {}
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .exclude(
        { path: 'anime', method: RequestMethod.GET },
        { path: 'anime', method: RequestMethod.POST },
      )
      .forRoutes(AnimeController);
  }
}
