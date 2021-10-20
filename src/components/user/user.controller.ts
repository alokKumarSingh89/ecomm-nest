import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from './entity/user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  public async create(@Body() userDta: User): Promise<User> {
    return await this.userService.create(userDta);
  }

  @Get()
  public async index(): Promise<User[]> {
    return await this.userService.all();
  }
}
