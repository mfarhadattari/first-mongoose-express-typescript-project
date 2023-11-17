export interface Name {
  firstName: string;
  middleName?: string;
  lastName: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface Guardian {
  fatherName: string;
  fatherOccupation: string;
  fatherContractNo: string;
  motherName: string;
  motherOccupation: string;
  motherContractNo: string;
}

export interface LocalGuardian {
  name: string;
  relation: string;
  contractNo: string;
  occupation: string;
  address: Address;
}

export interface Student {
  id: string;
  name: Name;
  gender: 'male' | 'female';
  dataOfBirth: string;
  email: string;
  contractNo: string;
  emergencyContractNo: string;
  avatar?: string;
  bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: Address;
  paramentAddress: Address;
  guardian: Guardian;
  localGuardian: LocalGuardian;
  isActive: 'active' | 'inactive';
}
