import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Appointment } from './appointment.model';
import { CreateAppointmentDto } from 'src/common/dto/create-appointment.dto';

@Injectable() // Marks the class as injectable, allowing it to be used for dependency injection
export class AppointmentService {
  constructor(@InjectModel(Appointment.name) private appointmentModel: Model<Appointment>) {}

  // Method to create a new appointment
  async create(createAppointmentDto: CreateAppointmentDto): Promise<Appointment> {
    // Create a new instance of the appointment model using the provided data transfer object (DTO)
    const createdAppointment = new this.appointmentModel(createAppointmentDto);
    // Save the new appointment to the database and return the result
    return createdAppointment.save();
  }

  // Method to find and return all appointments
  async findAll(): Promise<Appointment[]> {
    // Query the database to get all appointments and return the results
    return this.appointmentModel.find().exec();
  }

  // Method to find a specific appointment by ID
  async findOne(id: string): Promise<Appointment | null> {
    // Query the database to find an appointment by its ID and return the result
    return this.appointmentModel.findOne({ _id: id }).exec();
  }
}
