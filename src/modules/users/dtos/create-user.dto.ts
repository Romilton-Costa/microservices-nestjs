import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";

export class CreateUserDto{
@ApiProperty({
    description:'username',
    example:'bruno costa'
})
@IsString()
 name:string;

 @IsEmail()
 @ApiProperty({
    description:'user email',
    example:'example@email.com'
 })
 email:string;
}