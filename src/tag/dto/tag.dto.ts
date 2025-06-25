import { ApiProperty } from "@nestjs/swagger";
import { TTagDto, TTagDtoResponse } from "../interface/tag.interface";

export class TagDto implements TTagDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  slug: string;
  @ApiProperty()
  id: number;
  @ApiProperty({ required: false, nullable: true})
  updatedAt: Date | null
  @ApiProperty({ required: false, nullable: true})
  createdAt: Date | null

}

export class TagDtoPublic {
  @ApiProperty()
  name: string;
  @ApiProperty()
  slug: string;
  @ApiProperty({ required: false, nullable: true})
  id: number;

  constructor(params: TTagDto){
    this.name = params.name;
    this.id = params.id;
    this.slug = params.slug;
  }

  toJSON(): TTagDtoResponse{
    return{
        name: this.name,
        id: this.id,
        slug : this.slug,
    }
  }
}

export class TagDtoResponse{
    @ApiProperty({type: [TagDtoPublic]})
    data: TTagDto[] | TTagDtoResponse[];
    @ApiProperty()
    total: number;

    constructor(params: {data: TTagDto[] | TTagDtoResponse[], total: number}){
        this.data = params.data;
        this.total = params.total;
    }

    toJSON(): {data: TTagDtoResponse[], total: number}{
        return{
            data: this.data.map((item)=> new TagDtoPublic(item).toJSON()),
            total: this.total
        }
    }
}