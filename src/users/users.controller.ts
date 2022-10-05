import { Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger/dist';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  @Get('/@:username')
  getUserByUsername(@Param('username') username: string) {
    return `details of username = ${username}`;
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
