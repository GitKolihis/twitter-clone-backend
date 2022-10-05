/* eslint-disable prettier/prettier */
import { Repository } from "typeorm";
import { UserEntity } from "./users.entity";

export class UserRepository extends Repository<UserEntity> {
    
}