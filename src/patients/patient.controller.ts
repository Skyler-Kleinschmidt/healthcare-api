import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { PatientService } from './patient.service';
import { CreatePatientDto } from 'src/common/dto/create-patient.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('patients') // The route prefix for patient-related API endpoints
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  // Endpoint to create a new patient, protected by JwtAuthGuard
  @UseGuards(JwtAuthGuard) // Protects the route using JWT authentication
  @Post() // Handles POST requests to '/patients'
  async create(@Body() createPatientDto: CreatePatientDto) {
    return this.patientService.create(createPatientDto); // Calls the service to create a patient
  }

  // Endpoint to get all patients, protected by JwtAuthGuard
  @UseGuards(JwtAuthGuard) // Protects the route using JWT authentication
  @Get() // Handles GET requests to '/patients'
  async findAll() {
    return this.patientService.findAll(); // Calls the service to fetch all patients
  }

  // Endpoint to get a specific patient by ID, protected by JwtAuthGuard
  @UseGuards(JwtAuthGuard) // Protects the route using JWT authentication
  @Get(':id') // Handles GET requests to '/patients/:id'
  async findOne(@Param('id') id: string) {
    return this.patientService.findOne(id); // Calls the service to fetch a patient by ID
  }
}
