import { Controller,Get,Query, Param, Post, Body } from '@nestjs/common';
import { createUserDto } from './create-user.dto.js';

const users = [
        {id:"1",name:"daniel"},
        {id:"2",name:"omotayo"},
    ]

@Controller('user')
export class UserController {



    @Get()
    sendUsers(@Query("name") name:string){
        return users.find((user)=>{
            return user?.name?.toLowerCase() === name.toLowerCase();
        })
    }

    @Get(":id")
    sendUsersById(@Param("id") id:string){
        return users?.find((user)=>{
            return user?.id === id;
        })
    }

    @Post()
    createUser(@Body() createUserDto:createUserDto){
        return {message:"User created successfully",createUserDto}
    }
}
