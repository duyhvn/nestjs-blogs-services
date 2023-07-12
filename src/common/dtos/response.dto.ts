import { ApiProperty } from '@nestjs/swagger';

export class ResponseDto<T> {
  @ApiProperty()
  data!: T | null;
}
export class ResponseModel<T> {
  @ApiProperty()
  $data?: T | null;
  $request?: string;
  $error?: string;
}