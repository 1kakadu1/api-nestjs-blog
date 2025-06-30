import { ApiProperty } from "@nestjs/swagger";
import { TCategoryDto, TCategoryDtoResponse } from "../interface/category.interface";

export class CategoryDto implements TCategoryDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  slug: string;
  @ApiProperty()
  preview: string | null;
  @ApiProperty()
  id: number;
  @ApiProperty()
  isDefault: boolean;
}

export class CategoryDtoPublic {
  @ApiProperty()
  name: string;
  @ApiProperty()
  slug: string;
  @ApiProperty({ required: false, nullable: true})
  preview: string | null;

  constructor(params: TCategoryDto){
    this.name = params.name;
    this.preview = params.preview;
    this.slug = params.slug;
  }

  toJSON(): TCategoryDtoResponse{
    return{
        name: this.name,
        preview: this.preview,
        slug : this.slug,
    }
  }
}

export class CategoryDtoResponse{
    @ApiProperty({type: [CategoryDtoPublic]})
    data: TCategoryDto[] | TCategoryDtoResponse[];
    @ApiProperty()
    total: number;

    constructor(params: {data: TCategoryDto[] | TCategoryDtoResponse[], total: number}){
        this.data = params.data;
        this.total = params.total;
    }

    toJSON(): {data: TCategoryDtoResponse[], total: number}{
        return{
          data: this.data.map((item)=> new CategoryDtoPublic(item).toJSON()),
          total: this.total
        }
    }
}