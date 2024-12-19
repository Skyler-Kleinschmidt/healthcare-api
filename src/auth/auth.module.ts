import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthController } from './auth.controller';
import { UserSchema } from './user.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    // PassportModule for handling authentication strategies (local, JWT)
    PassportModule,

    // MongooseModule to integrate the User schema with MongoDB
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),

    // JwtModule to handle JWT creation and verification, configured asynchronously
    JwtModule.registerAsync({
      imports: [ConfigModule], // Import ConfigModule for accessing environment variables
      inject: [ConfigService], // Inject ConfigService to retrieve config values
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'), // Secret key for signing JWT
        signOptions: { expiresIn: configService.get<string>('JWT_EXPIRATION') }, // JWT expiration time
      }),
    }),
  ],
  // Registering the AuthController to handle authentication-related HTTP requests
  controllers: [AuthController],

  // Registering AuthService and strategies for handling JWT and local authentication
  providers: [AuthService, JwtStrategy, LocalStrategy],

  // Export AuthService for use in other modules
  exports: [AuthService],
})
export class AuthModule {}
