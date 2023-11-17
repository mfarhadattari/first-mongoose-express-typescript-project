import { Student } from './student.interface';
import { StudentModel } from './student.model';

const createStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

const getAllStudentFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const getStudentByIdFromDB = async (studentID: string) => {
  const result = await StudentModel.findOne({ id: studentID });
  return result;
};

export const StudentService = {
  createStudentIntoDB,
  getAllStudentFromDB,
  getStudentByIdFromDB,
};
