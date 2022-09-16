import { Controller, Get, Param } from '@nestjs/common';

@Controller('hashtags')
export class HashtagsController {
  @Get('/')
  getTopHashtags(): string {
    //TODO: implement
    return 'This is my first NEST.js';
  }

  @Get('/:tag/posts')
  getPostsForHashtag(@Param() params): string {
    return `show all post with hastag ${params.tag}`;
  }
}
