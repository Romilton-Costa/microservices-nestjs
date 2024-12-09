import { ApiProperty } from "@nestjs/swagger";
<<<<<<< HEAD

export class CreateUserDto{
@ApiProperty()
 name:string;
 @ApiProperty()
=======
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
>>>>>>> 5cfd7df (feat: add prisma)
 email:string;
}