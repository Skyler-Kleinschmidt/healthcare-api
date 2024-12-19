import { IsInt, IsString } from 'class-validator';

// DTO (Data Transfer Object) class to define the structure and validation rules for creating an appointment
export class CreateAppointmentDto {
  @IsInt() // Validates that patient_id is an integer
  patient_id: number;

  @IsString() // Validates that doctor is a string
  doctor: string;

  @IsString() // Validates that appointment_date is a string (e.g., date in string format)
  appointment_date: string;

  @IsString() // Validates that reason is a string
  reason: string;
}
