import { Controller, Get, Query } from '@nestjs/common';
import { TagService } from './tag.service';
import { ApiQuery, ApiResponse } from '@nestjs/swagger';
import { TagDtoResponse } from './dto/tag.dto';

@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}

    @Get('tags')
    @ApiResponse({
      status: 200,
      description: 'Get tag list',
      type: TagDtoResponse,
    })
    @ApiQuery({
      name: 'limit',
      required: false,
      type: Number,
      default: 100,
      description: 'Get a certain number of tag. Default 100',
      example: '100',
    })
    @ApiQuery({
      name: 'offset',
      required: false,
      type: Number,
      default: null,
      description: 'Shift tag. Default null',
    })
    async findTags(
      @Query('limit') limit?: string,
      @Query('offset') offset?: string | null,
    ): Promise<TagDtoResponse> {
      const result = await this.tagService.getList({
        limit: limit ? parseInt(limit) : 30,
        offset: offset ? parseInt(offset) : undefined,
      });
      const data = new TagDtoResponse(result);
      return data;
    }
}
