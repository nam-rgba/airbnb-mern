import { Body, Controller, Post } from '@nestjs/common'
import { UserService } from './user.service'
import { User } from './schema/user.entity'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  create(@Body() user: User) {
    return this.userService.create(user)
  }
}
