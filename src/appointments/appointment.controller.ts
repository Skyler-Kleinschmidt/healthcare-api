import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { CreateAppointmentDto } from 'src/common/dto/create-appointment.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

// Controller for handling appointment-related routes
@Controller('appointments')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  // Route to create a new appointment, only accessible with a valid JWT token
  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createAppointmentDto: CreateAppointmentDto) {
    // Call the appointment service to create the appointment
    return this.appointmentService.create(createAppointmentDto);
  }

  // Route to fetch all appointments, only accessible with a valid JWT token
  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    // Call the appointment service to get all appointments
    return this.appointmentService.findAll();
  }

  // Route to fetch a specific appointment by ID, only accessible with a valid JWT token
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    // Call the appointment service to find an appointment by its ID
    return this.appointmentService.findOne(id);
  }
}
