import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/databse.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    DatabaseModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public')
    }),
    PostsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
