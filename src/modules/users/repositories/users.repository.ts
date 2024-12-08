import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "../dtos/create-user.dto";
import { UpdateUserDto } from "../dtos/update-user.dto";
import { randomUUID } from "node:crypto";

@Injectable()
export class UsersRepository{
    private users:any[]=[];

    create(user:CreateUserDto ){


    const formatUser={
        name:user.name,
        email:user.email,
        id:randomUUID(),
    }
        this.users.push(formatUser);
        return formatUser;
    }
    
    findAll(){
        return this.users;
    }

    updateUserById(id:string,data:UpdateUserDto){
        const user=this.users.find(user=>user.id== id );

        user.name=data.name;
        user.email=data.email;
        return user;
    }
}