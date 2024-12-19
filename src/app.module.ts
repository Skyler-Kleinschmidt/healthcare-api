// src/app.module.ts
import { Module } from '@nestjs/common'; // Importing Module to define the main application module
import { MongooseModule } from '@nestjs/mongoose'; // Importing MongooseModule for MongoDB integration
import { ConfigModule, ConfigService } from '@nestjs/config'; // Importing ConfigModule for configuration management
import { PatientModule } from './patients/patient.module'; // Importing the PatientModule to handle patient-related routes and services
import { AppointmentModule } from './appointments/appointment.module'; // Importing AppointmentModule for appointment-related functionality
import { AuthModule } from './auth/auth.module'; // Importing AuthModule for authentication functionality

@Module({
  imports: [
    // ConfigModule is used to load configuration files and environment variables
    ConfigModule.forRoot({
      isGlobal: true, // This makes the configuration globally accessible across the app
    }),

    // MongooseModule is used to connect to MongoDB
    MongooseModule.forRootAsync({
      imports: [ConfigModule], // Importing ConfigModule for async configuration
      inject: [ConfigService], // Injecting ConfigService to access the configuration variables
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'), // Getting the MongoDB URI from configuration to connect to the database
      }),
    }),

    // Importing other modules
    AuthModule, // Handles authentication logic and security
    PatientModule, // Manages patient data and operations
    AppointmentModule, // Manages appointment data and operations
  ],
})
export class AppModule {}
