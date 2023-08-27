import { Post, Prisma } from '@prisma/client';
import { PostParams, UpdatePostParam } from 'src/types/params.type';
import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async post(
    postWhereUniqueInput: Prisma.PostWhereUniqueInput,
  ): Promise<Post | null> {
    return this.prisma.post.findUnique({
      where: postWhereUniqueInput,
    });
  }
  async posts(params: PostParams): Promise<Post[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.post.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }
  async createPost(data: Prisma.PostCreateInput): Promise<Post> {
    return this.prisma.post.create({
      data,
    });
  }
  async deletePost(where: Prisma.PostWhereUniqueInput): Promise<Post> {
    return this.prisma.post.delete({
      where,
    });
  }
  async updatePost(params: UpdatePostParam): Promise<Post> {
    return this.prisma.post.update({
      data: params.data,
      where: params.where,
    });
  }
}
