import { Injectable, UnauthorizedException } from '@nestjs/common'
import { UserService } from 'src/user/user.service'
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt'
@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}
  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOne(email)
    console.log({ user })
    if (user) {
      const isMatch = bcrypt.compareSync(password, user.password)
      if (isMatch) {
        const payload = { sub: user.id, email: user.email }
        const access_token = await this.jwtService.signAsync(payload)
        console.log('1' + { access_token })
        return { access_token: access_token }
      } else {
        console.log('fail password')
        throw new UnauthorizedException()
      }
    }
    console.log('fail')
    throw new UnauthorizedException()
  }
}
