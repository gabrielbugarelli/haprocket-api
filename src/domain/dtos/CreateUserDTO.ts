import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserDTO {

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;
}