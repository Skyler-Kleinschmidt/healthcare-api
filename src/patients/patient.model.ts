import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// Type alias for PatientDocument that extends Patient and Mongoose Document
export type PatientDocument = Patient & Document;

// Defining the Mongoose schema for the Patient model
@Schema() // Marks this class as a Mongoose schema
export class Patient {
  // The name of the patient, required field
  @Prop({ required: true })
  name: string;

  // The age of the patient, required field
  @Prop({ required: true })
  age: number;

  // The gender of the patient, required field
  @Prop({ required: true })
  gender: string;

  // The contact information of the patient, required field
  @Prop({ required: true })
  contact: string;
}

// Create the schema using Mongoose's SchemaFactory
export const PatientSchema = SchemaFactory.createForClass(Patient);
