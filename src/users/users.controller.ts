import { Body, Controller, Get, HttpStatus, Post } from "@nestjs/common";
import { CreateUserDto, LoginUserDto } from "./dto/users.dto";
import { User } from "./entitys/users.entity";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) { }

    @Get("/")
    async loginUser(@Body() body: LoginUserDto) {
        try {
            return await this.userService.findAll()
        } catch (e) {
            return e
        }
    }
}