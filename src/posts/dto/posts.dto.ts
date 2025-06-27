import { ApiProperty } from "@nestjs/swagger";
import { IPostSmallDto, IPostDto, TPostAuthor, TPostComments, TPostSeo } from "../interface/posts.interface";

export class PostSmallDto implements IPostSmallDto{
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
    isPopular: boolean;

    constructor(params: IPostSmallDto){
        this.id = params.id;
        this.title = params.title;
        this.description = params.description;
        this.smallDescription = params.smallDescription;
        this.slug = params.slug;
        this.isPopular = params.isPopular;
    }

    toJSON(){
        return{
            id: this.id,
            title: this.title,
            description: this.description,
            smallDescription: this.smallDescription,
            slug: this.slug,
            isPopular: this.isPopular,
        }
    }
}

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

    constructor(params: IPostDto){
        this.author  = new PostAuthorDto(params.author).toJSON();
        this.seo = params.seo ? new PostSeoDto(params.seo).toJSON() : null;
        this.comments = this.comments.map((item)=> new PostCommentDto(item).toJSON())
        this.id = params.id;
        this.title = this.title;
        this.description = this.description;
        this.smallDescription = this.smallDescription;
        this.slug = this.slug;
        this.createdAt = this.createdAt;
        this.isPopular = this.isPopular;
    }

    toJSON(): IPostDto{
        return{
            author: this.author,
            seo: this.seo,
            comments: this.comments,
            id: this.id,
            title: this.title,
            description: this.description,
            smallDescription: this.smallDescription,
            slug: this.slug,
            createdAt: this.createdAt,
            isPopular: this.isPopular,
        }
    }

}