import { TagPostModel } from "@prisma/client";

export type TTagDto  = TagPostModel;

export type  TTagDtoResponse  = Pick<TTagDto, 'name' | 'slug' | 'id'>

