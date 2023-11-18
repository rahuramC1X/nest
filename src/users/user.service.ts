import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './user.entity'

@Injectable()
export class UserService{
    constructor(
        @InjectRepository(User)
        private readonly userRepository:Repository<User>,
    ){}

    async create(user:User): Promise<User> {
        return await this.userRepository.save(user);
    }

    async findByEmail(email: string): Promise<User | undefined>{
        return await this.userRepository.findOneBy({email:email})
    }
}
