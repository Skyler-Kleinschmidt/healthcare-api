import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(configService: ConfigService) {
    // Initializing the strategy with JWT configuration options
    super({
      // Extract JWT from the authorization header as a Bearer token
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      
      // Do not ignore JWT expiration (it will be checked)
      ignoreExpiration: false,
      
      // Use the JWT secret from the config service
      secretOrKey: configService.get<string>('JWT_SECRET'),
    });
  }

  // The validate method is called when the JWT is successfully verified
  async validate(payload: any) {
    // Returning user information from the decoded JWT payload
    return { userId: payload.sub, username: payload.username };
  }
}
