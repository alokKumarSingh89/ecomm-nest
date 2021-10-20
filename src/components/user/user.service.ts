import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}

  public async create(userDto: User): Promise<User> {
    const user = new User();
    user.email = userDto.email;
    user.password = userDto.password;
    return this.userRepo.save(user);
  }

  public async all(): Promise<User[]> {
    return this.userRepo.find({});
  }
}
