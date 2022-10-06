/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Post, Put, Delete, NotFoundException } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger/dist';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {

  constructor(private userService: UsersService){}

  @Get('/@:username')
  async getUserByUsername(@Param('username') username: string): Promise<any> {
    const user = await this.userService.getUserByUsername(username)
    if (!user) {
      throw new NotFoundException('User Not Found')
    }
    return user;
  }

  @Get('/:userid')
  getUserByUserid(@Param('userid') userid: string) {
    return `details of the user id = ${userid}`;
  }

  @Put('/:userid/follow')
  followUser(): string {
    return 'you followed user';
  }

  @Delete('/:userid/follow')
  unfollowUser(): string {
    return 'you unfollowed user';
  }

  @Get('/:userid/followers')
  getFollowersOfUser(): string {
    return 'get followers of user';
  }

  @Put('/:userid/followees')
  getFolloweesOfUser(): string {
    return `get followees of given user`;
  }
}
