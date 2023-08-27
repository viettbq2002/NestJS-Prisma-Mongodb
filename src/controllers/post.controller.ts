import { Post as PostModel } from '@prisma/client';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PostService } from 'src/services/post.service';
import { UserService } from 'src/services/user.service';
interface PostData {
  title: string;
  content?: string;
  authorEmail: string;
}

@Controller('post')
export class PostController {
  constructor(
    private readonly userSerive: UserService,
    private readonly postService: PostService,
  ) {}
  @Get('/published')
  async publishedPost(): Promise<PostModel[]> {
    return await this.postService.posts({
      where: { published: true },
    });
  }
  @Get('/all')
  async allPost(): Promise<PostModel[]> {
    return await this.postService.posts({});
  }

  @Post()
  async createDaft(@Body() postData: PostData): Promise<PostModel> {
    return this.postService.createPost({
      title: postData.title,
      content: postData.content,
      author: {
        connectOrCreate: {
          where: {
            email: postData.authorEmail,
          },
          create: {
            email: postData.authorEmail,
          },
        },
      },
    });
  }
  @Delete('/:id')
  async deletePost(@Param('id') postId: string): Promise<PostModel> {
    return await this.postService.deletePost({ id: postId });
  }
  @Put('publish/:id')
  async publishPost(@Param('id') postId: string): Promise<PostModel> {
    return this.postService.updatePost({
      where: { id: postId },
      data: { published: true },
    });
  }
}
