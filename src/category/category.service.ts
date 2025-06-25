import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DataBaseService } from 'src/database/database.service';
import { TCategoryDtoResponse } from './interface/category.interface';

@Injectable()
export class CategoryService {
  constructor(private prisma: DataBaseService) {}
  async getList<N extends Prisma.CategoryModelFindManyArgs>(
    filters?: { limit?: number; offset?: number },
    argsTotal?: Prisma.SelectSubset<N, Prisma.CategoryModelFindManyArgs>,
  ): Promise<{ data: TCategoryDtoResponse[]; total: number }> {
    const argsTotalDef = argsTotal ? argsTotal : {};
    const category = await this.prisma.categoryModel.findMany({
      select: {
        preview: true,
        name: true,
        slug: true,
      },
      skip: filters?.offset,
      take: filters?.limit,
    });
    const total = await this.prisma.categoryModel.count({
      ...argsTotalDef,
      skip: filters?.offset,
      take: filters?.limit,
    });

    return {
      data: category,
      total,
    };
  }
}
