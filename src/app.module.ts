import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { PostsController } from './posts/posts.controller';
import { HashtagsController } from './hashtags/hashtags.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './users/users.entity';
import { PostEntity } from './posts/post.entity';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { Users } from './users';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'twitteradmin',
      password: 'twitterpass',
      database: 'twitterdb',
      entities: [UserEntity, PostEntity],
      synchronize: true,
      logging: 'all',
      logger: 'advanced-console',
      // dropSchema: true,
    }),
    UsersModule,
  ],
  controllers: [AppController, PostsController, HashtagsController],
  providers: [AppService],
})
export class AppModule {}
