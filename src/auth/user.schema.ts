import { Schema, Document } from 'mongoose';

// Defining the User interface which extends Document to be used with Mongoose models
export interface User extends Document {
  username: string;  // Username field, required and unique
  password: string;  // Password field, required
}

// Defining the Mongoose schema for the User model
export const UserSchema = new Schema({
  username: { type: String, required: true, unique: true }, // Ensures username is unique and required
  password: { type: String, required: true }, // Ensures password is required
});
