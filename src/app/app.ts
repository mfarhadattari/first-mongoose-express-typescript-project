import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { StudentRoutes } from './modules/student/student.route';

const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// application route
app.use('/api/v1/student', StudentRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
