import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('HashTags')
@Controller('hashtags')
export class HashtagsController {
  @Get('/')
  getTopHashtags(): string {
    //TODO: implement
    return 'This is my first NEST.js';
  }

  @Get('/:tag/posts')
  getPostsForHashtag(@Param('tag') tag: string) {
    return `show all post with hastag ${tag}`;
  }
}
