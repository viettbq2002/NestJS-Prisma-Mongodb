import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './services/prisma.service';
import { UserService } from './services/user.service';
import { PostService } from './services/post.service';
import { PostController } from './controllers/post.controller';
import { UserController } from './controllers/user.controller';

@Module({
  imports: [],
  controllers: [AppController, PostController, UserController],
  providers: [AppService, PrismaService, UserService, PostService],
})
export class AppModule {}
