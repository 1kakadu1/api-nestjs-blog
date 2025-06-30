import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DataBaseService } from 'src/database/database.service';
import { IPostSmallDto } from './interface/posts.interface';

@Injectable()
export class PostsService {
  constructor(private prisma: DataBaseService) {}

  async getList<N extends Prisma.PostModelFindManyArgs>(
    filters?: { limit?: number; offset?: number },
    argsTotal?: Prisma.SelectSubset<N, Prisma.PostModelFindManyArgs>,
  ): Promise<{ data: IPostSmallDto[]; total: number }> {
    const argsTotalDef = argsTotal ? argsTotal : {};
    const posts = await this.prisma.postModel.findMany({
      include: {
        author: {
          select: {
            id: true,
            name: true,
            avatar: true,
          },
        },
        categorys: {
          select: {
            category:{
                select:{
                    slug: true
                }
            }
          },
        },
      },
      //           include: {
      //     categorys: true,
      // },
      skip: filters?.offset,
      take: filters?.limit,
    });
    const total = await this.prisma.postModel.count({
      ...argsTotalDef,
      skip: filters?.offset,
      take: filters?.limit,
    });
    console.log(JSON.stringify(posts));
    return {
      data: posts as any,
      total,
    };
  }

  async getBySlug<T extends Prisma.PostModelFindFirstArgs>(
    slug: string,
    args?: Prisma.SelectSubset<T, Prisma.PostModelFindFirstArgs>,
  ) {
    const post = await this.prisma.postModel.findFirst({
      where: { slug: slug },
      omit: {
        seoId: true,
        updatedAt: true,
        id: true,
        authorId: true,
      },
      include: {
        author: {
          select: {
            avatar: true,
            name: true,
          },
        },
        images: {
          select: {
            id: true,
            url: true,
            alt: true,
          },
        },
        categorys: {
          select: {
            category: {
              select: {
                slug: true,
                preview: true,
                name: true,
              },
            },
          },
        },
        tags: {
          select: {
            tag: {
              select: {
                slug: true,
                name: true,
              },
            },
          },
        },
      },
    });

    if (!Boolean(post)) {
      throw new NotFoundException('404. Services not found');
    }

    return post;
  }
}
