/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UserEntity } from './users.entity';
import { UserRepository } from './users.repository';

@Injectable()
export class UsersService {
    constructor(
        private userRepo: UserRepository
    ) {
    }

    public async getUserByUsername(username: string): Promise<UserEntity> {
        return await this.userRepo.findOne({ where: { username } })
    }
}
