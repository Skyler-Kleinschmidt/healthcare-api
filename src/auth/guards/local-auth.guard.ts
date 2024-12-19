import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

// LocalAuthGuard class extending the AuthGuard to enforce local authentication (username and password)
@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {}
