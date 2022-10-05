import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger/dist/decorators';

@ApiTags('Posts')
@Controller('posts')
export class PostsController {
  @Get('/')
  getAllPosts(): string {
    return 'get all posts';
  }

  @Get('/:postid')
  getPostDetails(@Param('postId') postId: string) {
    return `details of postid = ${postId}`;
  }

  @Post('/')
  createNewPost(): string {
    return 'new post was created';
  }

  @Delete('/:postid')
  deletePost(@Param('postId') postId: string) {
    return `delete postid = ${postId}`;
  }

  @Put('/:postid/like')
  likePost(@Param('postId') postId: string) {
    return `liked post ${postId}`;
  }

  @Delete('/:postid/like')
  unlikePost(@Param('postId') postId: string) {
    return `unliked post ${postId}`;
  }
}
