import { Controller, Get, Query } from '@nestjs/common';
import { CategoryService } from './category.service';
import { ApiResponse, ApiTags, ApiQuery } from '@nestjs/swagger';
import { CategoryDtoResponse } from './dto/category.dto';

@ApiTags('Сategory')
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get('categorys')
  @ApiResponse({
    status: 200,
    description: 'Get categorys list',
    type: CategoryDtoResponse,
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    default: 30,
    description: 'Get a certain number of categories. Default 30',
    example: '30',
  })
  @ApiQuery({
    name: 'offset',
    required: false,
    type: Number,
    default: null,
    description: 'Shift categories. Default null',
  })
  async findCategorys(
    @Query('limit') limit?: string,
    @Query('offset') offset?: string | null,
  ): Promise<CategoryDtoResponse> {
    const result = await this.categoryService.getList({
      limit: limit ? parseInt(limit) : 30,
      offset: offset ? parseInt(offset) : undefined,
    });
    const data = new CategoryDtoResponse(result);
    return data;
  }
}
