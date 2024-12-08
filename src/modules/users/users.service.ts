import { Injectable } from "@nestjs/common";
import { UsersRepository } from "./repositories/users.repository";
import { CreateUserDto } from "./dtos/create-user.dto";
import { UpdateUserDto } from "./dtos/update-user.dto";

@Injectable()
export class UsersService{
constructor(private readonly repository:UsersRepository){}

    create(user:CreateUserDto){
        return this.repository.create(user);
    }

    findAll(){
        return this.repository.findAll();
    }

    update(id:string,updateuserdto:UpdateUserDto){
        return this.repository.updateUserById(id,updateuserdto);
    }
    delete(id:string){
        return this.repository.deleteUserById(id);
    }
}