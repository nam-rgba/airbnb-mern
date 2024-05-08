import { Body, Controller, HttpStatus, HttpCode, Post, Request, Get, Res } from '@nestjs/common'
import { AuthService } from './auth.service'
import { Response } from 'express'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Body() signInDto: Record<string, any>, @Res({ passthrough: true }) res: Response): Promise<any> {
    const token = await this.authService.validateUser(signInDto.email, signInDto.password)
    const cookieOptions = {
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24), // 1 day
      httpOnly: true
      // secure: process.env.NODE_ENV === 'production'
    }
    console.log('token: ', token)
    res.cookie('jwt', token, cookieOptions) // Set cookie

    return this.authService.validateUser(signInDto.email, signInDto.password)
  }

  @Get('profile')
  getProfile(@Request() req) {
    const token = req.headers.cookie.split('=')[1]
    return this.authService.getProfile(token)
  }
}
