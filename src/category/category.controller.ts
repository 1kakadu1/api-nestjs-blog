import { Controller, Get } from '@nestjs/common';
import { CategoryService } from './category.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CategoryDtoResponse } from './dto/category.dto';

@ApiTags('category')
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Categorys list',
    type: CategoryDtoResponse,
  })
  //@ApiParam({ name: 'slug', required: true })
  async findCategorys(): Promise<{ data: any }> {
    const result = await this.categoryService.getList();
    return new CategoryDtoResponse(result)
  }
}
