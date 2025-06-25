import { BannerModel, PostModel, BannerFiltersModel} from "@prisma/client";

export type TBannerPost = Pick<PostModel, "id"| "smallDescription" | "slug" | "title">; 
export type TBannerFilters = Pick<BannerFiltersModel, "id" | 'value' | "label">;

export interface TBannerDto extends Omit<BannerModel, "postId">  {
    post: TBannerPost | null;
    bannerFilters: TBannerFilters[];
};

