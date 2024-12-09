import { Injectable } from "@nestjs/common";
import { UsersRepository } from "./repositories/users.repository";
import { CreateUserDto } from "./dtos/create-user.dto";
import { UpdateUserDto } from "./dtos/update-user.dto";

@Injectable()
export class UsersService{
constructor(private readonly repository:UsersRepository){}

   async create(user:CreateUserDto){
        return await this.repository.create(user);
    }

  async  findAll(){
        return await this.repository.findAll();
    }

   async update(id:string,updateuserdto:UpdateUserDto){
        return await this.repository.updateUserById(id,updateuserdto);
    }
   async delete(id:string){
        return await this.repository.deleteUserById(id);
    }
}