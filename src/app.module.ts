import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { AnimeModule } from './anime/anime.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { AnimeController } from './anime/anime.controller';

@Module({
  imports: [AnimeModule],
})
export class AppModule implements NestModule {
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
