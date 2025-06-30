import { PostModel, UserModel, SeoModel, CommentModel, PostImage } from "@prisma/client";
import { TCategoryDtoResponse } from "src/category/interface/category.interface";

type TPostBase =  Omit<PostModel, "updatedAt" | "isPublished" | "seoId" | "authorId" | "id"> & {
    categorys: TCategoryDtoResponse[],
    images: PostImage[],
    author: TPostAuthor;
};

export interface IPostSmallDto extends Omit<TPostBase, "createdAt" | "description">{
}

export type TPostAuthor = Omit<UserModel, "password" | "email" >;

export type TPostSeo = SeoModel;

export type TPostComments = Omit<CommentModel, "updatedAt" | "deleted">;

export interface IPostDto extends TPostBase{
    seo: TPostSeo | undefined | null;
    comments: TPostComments[];
    images: PostImage[]
}
