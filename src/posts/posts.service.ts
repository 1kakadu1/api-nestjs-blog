import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DataBaseService } from 'src/database/database.service';

@Injectable()
export class PostsService {
    constructor(private db: DataBaseService) {}

    async getBySlug<T extends Prisma.PostModelFindFirstArgs>(
        slug: string,
        args?: Prisma.SelectSubset<T, Prisma.PostModelFindFirstArgs>,
    ){
        const post = await this.db.postModel.findFirst({
            where: { slug: slug },
            omit:{
                seoId: true,
                updatedAt: true,
                id: true,
                authorId: true,
            },
            include: {
                author:{
                    select:{
                        avatar: true,
                        name: true
                    }
                },
                images:{
                    select:{
                        url: true,
                        alt: true
                    }
                },
                categorys:{
                    select:{
                        category:{
                            select:{
                                slug: true,
                                preview: true,
                                name: true
                            }
                        }
                    }
                },
                tags: {
                    select: {
                        tag: {
                            select:{
                                slug: true,
                                name: true
                            }
                        }
                    }
                }
            },
        });

        if (!Boolean(post)) {
            throw new NotFoundException('404. Services not found');
        }

        return post;

    }
}
