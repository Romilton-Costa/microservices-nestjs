import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dtos/create-user.dto";
import { UpdateUserDto } from "./dtos/update-user.dto";
import {  ApiResponse, ApiTags } from "@nestjs/swagger";
import { ApiDocGenericPost } from "src/app/common/api-doc-post-generic.decorator";

@Controller('users')
@ApiTags('users')
export class UsersController{
    constructor(private readonly userservice:UsersService){}

    @Post()
    @ApiDocGenericPost('user-create',CreateUserDto)
   async create(@Body() body:CreateUserDto){
        return await this.userservice.create(body);
    }

    @Get()
   async findAll(){
        return await this.userservice.findAll();
    }
    
    @Patch(':id')
    async update(@Param('id') id: string, @Body() body :UpdateUserDto){
        return await this.userservice.update(id,body);
    }
    @Delete(':id')
   async remove(@Param('id') id:string ){
        return await this.userservice.delete(id);
    }
}