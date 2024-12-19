import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    // Calling the constructor of PassportStrategy with no additional options (default local strategy)
    super();
  }

  // Validate method checks user credentials (username and password)
  async validate(username: string, password: string): Promise<any> {
    // Calling the validateUser method of AuthService to check the user's credentials
    const user = await this.authService.validateUser(username, password);
    
    // If user is not found or invalid credentials are provided, throw an UnauthorizedException
    if (!user) {
      throw new UnauthorizedException();
    }

    // Return the validated user if credentials are correct
    return user;
  }
}
