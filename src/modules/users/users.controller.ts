import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dtos/create-user.dto";
import { UpdateUserDto } from "./dtos/update-user.dto";
<<<<<<< HEAD
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
=======
import {  ApiResponse, ApiTags } from "@nestjs/swagger";
import { ApiDocGenericPost } from "src/app/common/api-doc-post-generic.decorator";
>>>>>>> 5cfd7df (feat: add prisma)

@Controller('users')
@ApiTags('users')
export class UsersController{
    constructor(private readonly userservice:UsersService){}

    @Post()
<<<<<<< HEAD
    @ApiOperation({summary:'Criar novos users'})
    @ApiResponse({status:201,description:'novo user criado com sucesso'})
    @ApiResponse({status:400,description:'Parametros invalidos'})
    create(@Body() body:CreateUserDto){
        return this.userservice.create(body);
    }

    @Get()
    @ApiResponse({status:200,description:'lista de users'})
    @ApiResponse({status:400,description:'Parametros invalidos'})
    @ApiOperation({summary:'Listar todos os users '})
    findAll(){
        return this.userservice.findAll();
    }
    
    @Patch(':id')
    @ApiOperation({summary:'atualizar o user pelo id'})
    @ApiResponse({status:200,description:'dados atualizados por id'})
    @ApiResponse({status:400,description:'parametros invalidos'})
    update(@Param('id') id: string, @Body() body :UpdateUserDto){
        return this.userservice.update(id,body);
    }
    @Delete(':id')
    @ApiOperation({summary:'remover o user pelo o id'})
    @ApiResponse({status:201,description:'dado apagado com sucess'})
    @ApiResponse({status:400,description:'parametros invalidos'})
    remove(@Param('id') id:string ){
        return this.userservice.delete(id);
=======
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
>>>>>>> 5cfd7df (feat: add prisma)
    }
}