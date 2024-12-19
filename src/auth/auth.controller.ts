import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth') // Controller to handle authentication-related routes
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // Route for logging in users, protected by LocalAuthGuard (username and password authentication)
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req: any) {
    // Call the AuthService to login and return the JWT token
    return this.authService.login(req.user);
  }

  // Route for registering new users
  @Post('register')
  async register(
    @Body('username') username: string, // Extract username from request body
    @Body('password') password: string, // Extract password from request body
  ) {
    // Call the AuthService to register a new user
    return this.authService.register(username, password);
  }
}
