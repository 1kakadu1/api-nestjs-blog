import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PostsModule } from './posts/posts.module';
import { CategoryModule } from './category/category.module';
import { BannerModule } from './banner/banner.module';
import { TagModule } from './tag/tag.module';

@Module({
  imports: [
    DatabaseModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public')
    }),
    PostsModule,
    CategoryModule,
    BannerModule,
    TagModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
