import { Injectable } from '@nestjs/common';
import { CategoryModel, Prisma } from '@prisma/client';
import { DataBaseService } from 'src/database/database.service';
import { TCategoryDtoResponse } from './interface/category.interface';

@Injectable()
export class CategoryService {
  constructor(private prisma: DataBaseService) {}
  async getList<
    // T extends Prisma.CategoryModelFindManyArgs,
    N extends Prisma.CategoryModelFindManyArgs,
  >(
    //args?: Prisma.SelectSubset<T, Prisma.CategoryModelFindManyArgs>,
    argsTotal?: Prisma.SelectSubset<N, Prisma.CategoryModelFindManyArgs>,
  ): Promise<{ data: TCategoryDtoResponse[]; total: number }> {
    // const argsDef = args
    //   ? args
    //   : ({
    //      ,
    //     } as Prisma.CategoryModelFindManyArgs);
    const argsTotalDef = argsTotal ? argsTotal : {};
    const category = await this.prisma.categoryModel.findMany({
      select: {
        preview: true,
        name: true,
        slug: true,
      },
    });
    const total = await this.prisma.categoryModel.count({ ...argsTotalDef });

    return {
      data: category,
      total,
    };
  }
}
