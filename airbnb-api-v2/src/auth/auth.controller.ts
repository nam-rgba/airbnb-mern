import { Body, Controller, HttpStatus, HttpCode, Post, Request, UseGuards, Get, Res } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthGuard } from './auth.guard'
import { Response } from 'express'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Body() signInDto: Record<string, any>, @Res({ passthrough: true }) res: Response): Promise<any> {
    const token = await this.authService.validateUser(signInDto.email, signInDto.password)
    const cookieOptions = {
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365), // 1 year
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production'
    }
    res.cookie('jwt', token, cookieOptions) // Set cookie

    return this.authService.validateUser(signInDto.email, signInDto.password)
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user
  }
}
