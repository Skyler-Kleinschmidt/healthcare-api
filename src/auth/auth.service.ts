import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { User } from './user.schema';

@Injectable()
export class AuthService {
  constructor(
    // Injecting JwtService for generating JWT tokens
    private jwtService: JwtService,

    // Injecting the User model to interact with the User collection in the database
    @InjectModel('User') private readonly userModel: Model<User>,
  ) {}

  // Method to validate a user's credentials (username and password)
  async validateUser(username: string, password: string): Promise<any> {
    // Find the user by username
    const user = await this.userModel.findOne({ username }).exec();
    
    // If the user is not found, throw an UnauthorizedException
    if (!user) {
      throw new UnauthorizedException('Invalid username or password');
    }

    // Compare the provided password with the hashed password stored in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);
    
    // If the password is invalid, throw an UnauthorizedException
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid username or password');
    }

    // Remove the password field from the user object before returning it
    const { password: _, ...result } = user.toObject();
    return result;
  }

  // Method to log in a user and generate a JWT token
  async login(user: any): Promise<{ accessToken: string }> {
    // Define the payload for the JWT (username and user ID)
    const payload = { username: user.username, sub: user._id };
    
    // Sign the payload and return an access token
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  // Method to register a new user
  async register(username: string, plainPassword: string): Promise<any> {
    // Check if the username is already taken
    const existingUser = await this.userModel.findOne({ username }).exec();
    
    // If the username exists, throw an UnauthorizedException
    if (existingUser) {
      throw new UnauthorizedException('Username already exists');
    }

    // Generate a salt and hash the plain password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(plainPassword, salt);

    // Create a new user object with the hashed password and save it to the database
    const newUser = new this.userModel({ username, password: hashedPassword });
    await newUser.save();

    // Remove the password field from the new user object before returning it
    const { password: _, ...result } = newUser.toObject();
    return result;
  }
}
