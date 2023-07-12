import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class BaseQuery {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  $expand!: string;
}

export class QueryListModel extends BaseQuery {
  @ApiProperty({ required: false })
  @IsOptional()
  $cursor!: string;

  @ApiProperty({ required: false, type: 'number' })
  @IsOptional()
  $first!: number;
}
