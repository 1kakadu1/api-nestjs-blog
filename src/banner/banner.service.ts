import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DataBaseService } from 'src/database/database.service';
import { TBannerDto } from './interface/banner.interface';

@Injectable()
export class BannerService {
  constructor(private prisma: DataBaseService) {}
  async getList<N extends Prisma.BannerModelFindManyArgs>(
    filters?: { limit?: number; offset?: number; banner?: string },
    argsTotal?: Prisma.SelectSubset<N, Prisma.BannerModelFindManyArgs>,
  ): Promise<{ data: TBannerDto[]; total: number }> {
    const argsTotalDef = argsTotal ? argsTotal : {};
    const tags = await this.prisma.bannerModel.findMany({
      where: filters?.banner
        ? {
            bannerFilters: {
              some: {
                value: filters.banner,
              },
            },
          }
        : {},
      select: {
        id: true,
        preview: true,
        title: true,
        description: true,
        bannerFilters: {
          select: {
            label: true,
            value: true,
            id: true,
          },
        },
        post: {
          select: {
            id: true,
            title: true,
            smallDescription: true,
            slug: true,
          },
        },
      },

      skip: filters?.offset,
      take: filters?.limit,
    });
    const total = await this.prisma.bannerModel.count({
      ...argsTotalDef,
      where: filters?.banner
        ? {
            bannerFilters: {
              some: {
                value: filters.banner,
              },
            },
          }
        : {},
      skip: filters?.offset,
      take: filters?.limit,
    });

    return {
      data: tags,
      total,
    };
  }
}
