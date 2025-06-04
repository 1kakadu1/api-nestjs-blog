import { Controller, Get, Param } from '@nestjs/common';
import { ApiParam, ApiResponse } from '@nestjs/swagger';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
    constructor(private readonly postService: PostsService) {}

    @Get(':slug')
    // @ApiResponse({
    //   status: 200,
    //   description: 'The found record',
    //   type: ProductSingleResponseDto,
    // })
    //@ApiParam({ name: 'slug', required: true })
    async findOne(
      @Param() params: { slug: string },
    ): Promise<{ data: any }> {
      const result = await this.postService.getBySlug(params.slug)
      return {
        data: result,
      };
    }
}
