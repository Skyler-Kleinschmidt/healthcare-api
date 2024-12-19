import { Injectable } from '@nestjs/common'; // Importing Injectable to mark the service class
import { InjectModel } from '@nestjs/mongoose'; // Importing InjectModel to use the Mongoose model in NestJS
import { Model } from 'mongoose'; // Importing Model to interact with MongoDB
import { Patient } from './patient.model'; // Importing the Patient model for type definition
import { CreatePatientDto } from 'src/common/dto/create-patient.dto'; // Importing DTO for patient creation

@Injectable()
export class PatientService {
  constructor(@InjectModel(Patient.name) private patientModel: Model<Patient>) {}

  // Method to create a new patient record
  async create(createPatientDto: CreatePatientDto): Promise<Patient> {
    const createdPatient = new this.patientModel(createPatientDto); // Creating a new instance of the Patient model
    return createdPatient.save(); // Saving the patient record to the database
  }

  // Method to retrieve all patient records
  async findAll(): Promise<Patient[]> {
    return this.patientModel.find().exec(); // Executing a find query to retrieve all patient records
  }

  // Method to find a patient by ID
  async findOne(id: string): Promise<Patient | null> {
    return this.patientModel.findOne({ _id: id }).exec(); // Finding a patient record by its ID
  }
}
