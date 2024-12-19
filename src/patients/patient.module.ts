import { Module } from '@nestjs/common'; // Importing the Module decorator from NestJS
import { PatientService } from './patient.service'; // Importing the PatientService to handle business logic
import { PatientController } from './patient.controller'; // Importing the PatientController to handle routes
import { MongooseModule } from '@nestjs/mongoose'; // Importing the MongooseModule to interact with MongoDB
import { Patient, PatientSchema } from './patient.model'; // Importing the Patient model and its schema
import { AuthModule } from '../auth/auth.module'; // Importing the AuthModule for authentication guards

@Module({
  imports: [
    // Registering the Patient schema with Mongoose and ensuring it's available for this module
    MongooseModule.forFeature([{ name: Patient.name, schema: PatientSchema }]),

    // Importing the AuthModule to ensure authentication guards are available for routes in this module
    AuthModule,
  ],
  controllers: [PatientController], // Declaring the controller to handle HTTP requests
  providers: [PatientService], // Providing the service that contains the logic for managing patients
})
export class PatientModule {} // Exporting the PatientModule class to be used in the main application
