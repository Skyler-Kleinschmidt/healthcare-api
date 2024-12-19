// src/appointment/appointment.module.ts
import { Module } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { AppointmentController } from './appointment.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Appointment, AppointmentSchema } from './appointment.model';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    // MongooseModule for integrating Appointment schema with MongoDB
    MongooseModule.forFeature([{ name: Appointment.name, schema: AppointmentSchema }]),
    
    // Importing Auth module for authentication guards
    AuthModule, 
  ],
  // Registering AppointmentController to handle appointment-related requests
  controllers: [AppointmentController],
  
  // Registering AppointmentService to provide appointment-related business logic
  providers: [AppointmentService],
})
export class AppointmentModule {}
