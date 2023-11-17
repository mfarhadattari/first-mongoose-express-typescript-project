import { Schema, model } from 'mongoose';
import {
  Address,
  Guardian,
  LocalGuardian,
  Name,
  Student,
} from './student.interface';

const nameSchema = new Schema<Name>({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const guardianScheme = new Schema<Guardian>({
  fatherName: {
    type: String,
    required: true,
  },
  fatherOccupation: {
    type: String,
    required: true,
  },
  fatherContractNo: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  motherOccupation: {
    type: String,
    required: true,
  },
  motherContractNo: {
    type: String,
    required: true,
  },
});

const addressSchema = new Schema<Address>({
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zipCode: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: {
    type: String,
    required: true,
  },
  relation: {
    type: String,
    required: true,
  },
  contractNo: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  address: addressSchema,
});

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: nameSchema,
  gender: ['male', 'female'],
  dataOfBirth: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contractNo: {
    type: String,
    required: true,
  },
  emergencyContractNo: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  presentAddress: addressSchema,
  paramentAddress: addressSchema,
  guardian: guardianScheme,
  localGuardian: localGuardianSchema,
  isActive: ['active', 'inactive'],
});

export const StudentModel = model<Student>('Student', studentSchema);
