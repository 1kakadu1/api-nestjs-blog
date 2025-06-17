import { CategoryModel } from "@prisma/client";

export type TCategoryDto  = CategoryModel;

export type  TCategoryDtoResponse  = Pick<TCategoryDto, 'preview' | 'name' | 'slug'>

