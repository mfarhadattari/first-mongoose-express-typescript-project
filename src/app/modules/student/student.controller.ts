import { Request, Response } from 'express';
import { StudentService } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student } = req.body;
    const result = await StudentService.createStudentIntoDB(student);

    res.status(200).json({
      success: true,
      message: 'Student Created Successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await StudentService.getAllStudentFromDB();

    res.status(200).json({
      success: true,
      message: 'Students Get successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getStudentById = async (req: Request, res: Response) => {
  try {
    const studentID: string = req.params.studentID;
    const result = await StudentService.getStudentByIdFromDB(studentID);
    res.status(200).json({
      success: true,
      message: 'Student Found Successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const StudentController = {
  createStudent,
  getAllStudent,
  getStudentById,
};
