import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dtos/create-user.dto";
import { UpdateUserDto } from "./dtos/update-user.dto";

@Controller('users')
export class UsersController{
    constructor(private readonly userservice:UsersService){}

    @Post()
    create(@Body() body:CreateUserDto){
        return this.userservice.create(body);
    }

    @Get()
    findAll(){
        return this.userservice.findAll();
    }
    
    @Patch(':id')
    update(@Param('id') id: string, @Body() body :UpdateUserDto){
        return this.userservice.update(id,body);
    }
    @Delete(':id')
    remove(@Param('id') id:string ){
        return this.userservice.delete(id);
    }
}