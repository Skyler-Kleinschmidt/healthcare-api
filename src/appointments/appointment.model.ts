import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// Type definition for Appointment document, combining Appointment class and Mongoose Document
export type AppointmentDocument = Appointment & Document;

@Schema() // Decorator to define Appointment as a Mongoose schema
export class Appointment {
  @Prop({ required: true }) // Mongoose property decorator, makes patient_id a required field
  patient_id: number;

  @Prop({ required: true }) // Mongoose property decorator, makes doctor a required field
  doctor: string;

  @Prop({ required: true }) // Mongoose property decorator, makes appointment_date a required field
  appointment_date: string;

  @Prop({ required: true }) // Mongoose property decorator, makes reason a required field
  reason: string;
}

// Schema creation for the Appointment class
export const AppointmentSchema = SchemaFactory.createForClass(Appointment);
