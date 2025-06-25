import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { TTagDtoResponse } from './interface/tag.interface';
import { DataBaseService } from 'src/database/database.service';

@Injectable()
export class TagService {
  constructor(private prisma: DataBaseService) {}
  async getList<N extends Prisma.TagPostModelFindManyArgs>(
    filters?: { limit?: number; offset?: number },
    argsTotal?: Prisma.SelectSubset<N, Prisma.TagPostModelFindManyArgs>,
  ): Promise<{ data: TTagDtoResponse[]; total: number }> {
    const argsTotalDef = argsTotal ? argsTotal : {};
    const tags = await this.prisma.tagPostModel.findMany({
      select: {
        id: true,
        name: true,
        slug: true,
      },
      skip: filters?.offset,
      take: filters?.limit,
    });
    const total = await this.prisma.tagPostModel.count({
      ...argsTotalDef,
      skip: filters?.offset,
      take: filters?.limit,
    });

    return {
      data: tags,
      total,
    };
  }
}
