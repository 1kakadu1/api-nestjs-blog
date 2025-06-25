import { Controller, Get, Query } from '@nestjs/common';
import { BannerService } from './banner.service';
import { ApiQuery, ApiResponse } from '@nestjs/swagger';
import { BannerDtoResponse } from './dto/banner.dto';

@Controller('banner')
export class BannerController {
  constructor(private readonly bannerService: BannerService) {}
      @Get('banners')
      @ApiResponse({
        status: 200,
        description: 'Get banner list',
        type: BannerDtoResponse,
      })
      @ApiQuery({
        name: 'limit',
        required: false,
        type: Number,
        default: 100,
        description: 'Get a certain number of banner. Default 5',
        example: '5',
      })
      @ApiQuery({
        name: 'offset',
        required: false,
        type: Number,
        default: null,
        description: 'Shift banner. Default null',
      })
      @ApiQuery({
        name: 'banner',
        required: false,
        type: String,
        default: null,
        description: 'Filter page slug',
      })
      async findBanners(
        @Query('limit') limit?: string,
        @Query('offset') offset?: string | null,
        @Query('banner') banner?: string | null,
      ): Promise<any> {
        const result = await this.bannerService.getList({
          limit: limit ? parseInt(limit) : 30,
          offset: offset ? parseInt(offset) : undefined,
          banner: banner,
        });
        return new BannerDtoResponse(result);
      }
}
