import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from './schema/user.entity'
import { CreateUserDto } from './schema/create-user.dto'
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}
  async findOne(email: string): Promise<User | null> {
    const user = await this.userRepository.findOneBy({ email })
    return user
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const userExists = await this.findOne(createUserDto.email)
    if (userExists) {
      throw new Error('User already exists')
    }
    const newUser = this.userRepository.create(createUserDto)
    const hashedPassword = bcrypt.hashSync(newUser.password, 10)
    newUser.password = hashedPassword
    return this.userRepository.save(newUser)
  }
}
