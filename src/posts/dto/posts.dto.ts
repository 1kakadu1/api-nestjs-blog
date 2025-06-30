import { ApiProperty } from "@nestjs/swagger";
import { IPostSmallDto, IPostDto, TPostAuthor, TPostComments, TPostSeo } from "../interface/posts.interface";
import { PostImage } from "@prisma/client";
import { CategoryDtoPublic } from "src/category/dto/category.dto";
import { TCategoryDto, TCategoryDtoResponse } from "src/category/interface/category.interface";

export class PostAuthorDto implements TPostAuthor{
    @ApiProperty()
    name: string;
    @ApiProperty()
    id: number;
    @ApiProperty()
    avatar: string;

    constructor(params: TPostAuthor){
        this.name = params.name;
        this.id = params.id;
        this.avatar = params.avatar;
    }

    toJSON(): TPostAuthor{
        return{
            name: this.name,
            id: this.id,
            avatar: this.avatar,
        }
    }
}

export class PostSeoDto implements TPostSeo{
    @ApiProperty()
    id: number;
    @ApiProperty()
    keywords: string;
    @ApiProperty()
    title: string;
    @ApiProperty()
    description: string;
    @ApiProperty()
    robots: string;

    constructor(params: TPostSeo){
        this.id = params.id;
        this.keywords = params.keywords;
        this.title = params.title;
        this.description = params.description;
        this.robots = params.robots;
    }

    toJSON(): TPostSeo{
        return{
            id: this.id,
            keywords: this.keywords,
            title: this.title,
            description: this.description,
            robots: this.robots,
        }
    }

}

export class PostCommentDto implements TPostComments{
    @ApiProperty()
    id: number;
    @ApiProperty()
    content: string;
    @ApiProperty()
    createdAt: Date;
    @ApiProperty()
    parentId: number;
    @ApiProperty()
    postId: number;
    @ApiProperty()
    authorId: number;

    constructor(params: TPostComments){
        this.id = params.id;
        this.content = params.content;
        this.createdAt = params.createdAt;
        this.parentId = params.parentId;
        this.postId = params.postId;
        this.authorId = params.authorId;
    }


    toJSON(): TPostComments{
        return{
            id: this.id,
            content: this.content,
            createdAt: this.createdAt,
            parentId: this.parentId,
            postId: this.postId,
            authorId: this.authorId,
        }
    }
}
export class PostImageDto implements PostImage{
    @ApiProperty()
    id: number;
    @ApiProperty()
    url: string;
    @ApiProperty()
    alt: string;
}

export class PostSmallDto implements IPostSmallDto{
    @ApiProperty()
    title: string;
    @ApiProperty()
    smallDescription: string;
    @ApiProperty()
    slug: string;
    @ApiProperty()
    isPopular: boolean;
    @ApiProperty({type: PostAuthorDto})
    author: TPostAuthor;
    @ApiProperty({type: [PostImageDto]})
    images: PostImage[];
    @ApiProperty({type: [CategoryDtoPublic]})
    categorys: TCategoryDtoResponse[];
    constructor(params: IPostSmallDto){
        this.title = params.title;
        this.smallDescription = params.smallDescription;
        this.slug = params.slug;
        this.isPopular = params.isPopular;
        this.author  = new PostAuthorDto(params.author).toJSON();
        this.categorys = params.categorys.map(item => new CategoryDtoPublic(item as TCategoryDto).toJSON())
        this.images = params.images;
    }

    toJSON(): IPostSmallDto{
        return{
            title: this.title,
            smallDescription: this.smallDescription,
            slug: this.slug,
            isPopular: this.isPopular,
            author: this.author,
            images: this.images,
            categorys: this.categorys.map((item)=> item)
        }
    }
}

export class PostDto implements IPostDto{
    @ApiProperty()
    author: TPostAuthor;
    @ApiProperty()
    seo: TPostSeo | null | undefined;
    @ApiProperty()
    comments: TPostComments[];
    @ApiProperty()
    id: number;
    @ApiProperty()
    title: string;
    @ApiProperty()
    description: string;
    @ApiProperty()
    smallDescription: string;
    @ApiProperty()
    slug: string;
    @ApiProperty()
    createdAt: Date;
    @ApiProperty()
    isPopular: boolean;
    @ApiProperty({type: [PostImageDto]})
    images: PostImage[];
    @ApiProperty({type: [CategoryDtoPublic]})
    categorys: TCategoryDtoResponse[];

    constructor(params: IPostDto){
        this.author  = new PostAuthorDto(params.author).toJSON();
        this.seo = params.seo ? new PostSeoDto(params.seo).toJSON() : null;
        this.comments = params.comments.map((item)=> new PostCommentDto(item).toJSON())
        this.title = params.title;
        this.description = params.description;
        this.smallDescription = params.smallDescription;
        this.slug = params.slug;
        this.createdAt = params.createdAt;
        this.isPopular = params.isPopular;
        this.images = params.images;
        this.categorys = params.categorys.map(item => new CategoryDtoPublic(item as TCategoryDto).toJSON())
    }

    toJSON(): IPostDto{
        return{
            author: this.author,
            seo: this.seo,
            comments: this.comments,
            title: this.title,
            description: this.description,
            smallDescription: this.smallDescription,
            slug: this.slug,
            createdAt: this.createdAt,
            isPopular: this.isPopular,
            images: this.images,
            categorys: this.categorys
        }
    }

}

export class PostSmallListResponseDto {
    @ApiProperty({type: [PostSmallDto]})
    data: IPostSmallDto[];
    @ApiProperty()
    total: number

    constructor(params: {data: IPostSmallDto[], total: number}){
        this.data = params.data;
        this.total = params.total;
    }

    toJSON(): {data: IPostSmallDto[], total: number}{
        return{
            data: this.data.map((item)=> new PostSmallDto(item).toJSON()),
            total: this.total
        }
    }
}

export class PostResponseDto {
    @ApiProperty({type: [PostDto]})
    data: IPostDto;

    constructor(params: {data: IPostDto, total: number}){
        this.data = params.data;
    }

    toJSON(): {data: IPostDto}{
        return{
            data: this.data,
        }
    }


}