import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { UserService } from 'src/services/user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  getAllUsers(): Promise<User[]> {
    return this.userService.users();
  }
  @Get('/:id')
  async getUserById(@Param('id') userId: string): Promise<User> {
    const user = await this.userService.user({
      id: String(userId),
    });
    if (!user) {
      throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);
    }
    return user;
  }
  @Post()
  async signupUser(
    @Body() userData: { email: string; name?: string },
  ): Promise<User> {
    return this.userService.createUser(userData);
  }
}
