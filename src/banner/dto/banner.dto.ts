import { ApiProperty } from "@nestjs/swagger";
import { TBannerDto, TBannerFilters, TBannerPost } from "../interface/banner.interface";

export class BannerPostDto implements TBannerPost{
  @ApiProperty()
  title: string;
  @ApiProperty()
  id: number;
  @ApiProperty()
  slug: string;
  @ApiProperty()
  smallDescription: string;

  constructor(prams: TBannerPost){
    this.title = prams.title;
    this.slug = prams.slug;
    this.smallDescription = prams.smallDescription;
    this.id = prams.id;
  }

  toJSON(): TBannerPost{
    return{
      title: this.title,
      slug: this.slug,
      smallDescription: this.smallDescription,
      id: this.id,
    }
  }
}

export class BannerFiltersDto implements TBannerFilters{
  @ApiProperty()
  id: number;
  @ApiProperty()
  value: string;
  @ApiProperty()
  label: string;

  constructor(prams: TBannerFilters){
    this.value = prams.value;
    this.label = prams.label;
    this.id = prams.id;
  }

  toJSON(): TBannerFilters{
    return{
      label: this.label,
      value: this.value,
      id: this.id,
    }
  }
}

export class BannerDto implements TBannerDto {
  @ApiProperty()
  id: number
  @ApiProperty()
  preview: string;
  @ApiProperty({ required: false, nullable: true})
  title: string | null;
  @ApiProperty({ required: false, nullable: true})
  description: string | null;
  @ApiProperty({ required: false, nullable: true, type: BannerPostDto})
  post: BannerPostDto | null
  @ApiProperty({ required: false, nullable: true, type: [BannerFiltersDto]})
  bannerFilters: BannerFiltersDto[]

  constructor(params: TBannerDto){
    this.description = params.description;
    this.id = params.id;
    this.preview = params.preview;
    this.post = params.post ? new BannerPostDto(params.post) : null; 
    this.bannerFilters = params.bannerFilters.map(item => new BannerFiltersDto(item));
    this.title = params.title;
  }

  toJSON(): TBannerDto{
    return{
      title: this.title,
      preview: this.preview,
      id: this.id,
      description: this.description,
      post: this.post ? this.post.toJSON() : null,
      bannerFilters: this.bannerFilters.map(item => item.toJSON())
    }
  }
}

export class BannerDtoResponse{
    @ApiProperty({type: [BannerDto]})
    data: TBannerDto[];
    @ApiProperty()
    total: number;

    constructor(params: {data: TBannerDto[], total: number}){
        this.data = params.data;
        this.total = params.total;
    }

    toJSON(): {data: TBannerDto[], total: number}{
        return{
            data: this.data.map((item)=> new BannerDto(item).toJSON()),
            total: this.total
        }
    }
}