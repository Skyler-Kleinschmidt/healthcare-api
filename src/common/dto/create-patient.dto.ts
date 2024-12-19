import { IsString, IsInt } from 'class-validator';

// DTO (Data Transfer Object) class to define the structure and validation rules for creating a patient
export class CreatePatientDto {
  @IsString() // Validates that name is a string
  name: string;

  @IsInt() // Validates that age is an integer
  age: number;

  @IsString() // Validates that gender is a string
  gender: string;

  @IsString() // Validates that contact is a string (e.g., phone number or email)
  contact: string;
}
