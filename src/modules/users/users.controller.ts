import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dtos/create-user.dto";
import { UpdateUserDto } from "./dtos/update-user.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@Controller('users')
@ApiTags('users')
export class UsersController{
    constructor(private readonly userservice:UsersService){}

    @Post()
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
    }
}