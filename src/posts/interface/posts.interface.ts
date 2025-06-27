import { PostModel, UserModel, SeoModel, CommentModel } from "@prisma/client";

type TPostBase =  Omit<PostModel, "updatedAt" | "isPublished" | "seoId" | "authorId">;

export interface IPostSmallDto extends Omit<TPostBase, "createdAt">{}

export type TPostAuthor = Omit<UserModel, "password" | "email" >;

export type TPostSeo = SeoModel;

export type TPostComments = Omit<CommentModel, "updatedAt" | "deleted">;

export interface IPostDto extends TPostBase{
    author: TPostAuthor;
    seo: TPostSeo | undefined | null;
    comments: TPostComments[];
}
