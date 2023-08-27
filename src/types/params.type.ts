/* eslint-disable prettier/prettier */
import { Prisma } from '@prisma/client';
export interface PostParams {
  skip?: number;
  take?: number;
  cursor?: Prisma.PostWhereUniqueInput;
  where?: Prisma.PostWhereInput;
  orderBy?: Prisma.PostOrderByWithRelationInput;
}

export interface UserParams {
  skip?: number;
  take?: number;
  cursor?: Prisma.UserWhereUniqueInput;
  where?: Prisma.UserWhereInput;
  orderBy?: Prisma.UserOrderByWithRelationInput;
}

export interface UpdatePostParam {
  where: Prisma.PostWhereUniqueInput;
  data: Prisma.PostUpdateInput;
}
