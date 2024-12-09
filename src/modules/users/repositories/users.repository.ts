import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "../dtos/create-user.dto";
import { UpdateUserDto } from "../dtos/update-user.dto";
import { randomUUID } from "node:crypto";
import { PrismaService } from "src/modules/global/prisma/prisma.service";

@Injectable()
export class UsersRepository{
   constructor(private readonly prismaservice:PrismaService){};

 async create(user:CreateUserDto ){

    const formatUser={
        name:user.name,
        email:user.email,
        
    }
        await this.prismaservice.users.create({
            data:formatUser,
        });
    }
    
    async findAll(){
        return await this.prismaservice.users.findMany()
    }

   async updateUserById(id:string,data:UpdateUserDto){
       const user=await this.prismaservice.users.update({
        where:{
            id,
        },
        data,
       })
        return user;
    }
   async deleteUserById(id: string){
        return await this.prismaservice.users.delete({
            where:{
                id,
            }
        })
    }
}