import { IsString } from 'class-validator';

// DTO (Data Transfer Object) class to define the structure and validation rules for login credentials
export class LoginDto {
  @IsString() // Validates that username is a string
  username: string;

  @IsString() // Validates that password is a string
  password: string;
}
