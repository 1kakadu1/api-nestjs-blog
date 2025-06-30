import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiParam, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { PostsService } from './posts.service';
import { PostResponseDto, PostSmallListResponseDto } from './dto/posts.dto';
import { IPostDto } from './interface/posts.interface';

@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  // @Get(':slug')
  // @ApiResponse({
  //   status: 200,
  //   description: 'The found record',
  //   type: PostResponseDto,
  // })
  // @ApiParam({ name: 'slug', required: true })
  // async findOne(@Param() params: { slug: string }): Promise<{ data: IPostDto }> {
  //   const result = await this.postService.getBySlug(params.slug);
  //   return {
  //     data: new PostResponseDto(result).toJSON(),
  //   };
  // }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Get post list',
    type: PostSmallListResponseDto,
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    default: 20,
    description: 'Get a certain number of posts. Default 20',
    example: '20',
  })
  @ApiQuery({
    name: 'offset',
    required: false,
    type: Number,
    default: null,
    description: 'Shift post. Default null',
  })
  async findTags(
    @Query('limit') limit?: string,
    @Query('offset') offset?: string | null,
  ): Promise<PostSmallListResponseDto> {
    const result = await this.postService.getList({
      limit: limit ? parseInt(limit) : 30,
      offset: offset ? parseInt(offset) : undefined,
    });
    const data = new PostSmallListResponseDto(result);
    return data;
  }
}
