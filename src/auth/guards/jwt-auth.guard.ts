import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

// JwtAuthGuard class extending the AuthGuard to enforce JWT authentication
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
