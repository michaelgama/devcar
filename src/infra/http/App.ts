import 'reflect-metadata';
import 'express-async-errors';

import '../container';

import cors from 'cors';
import express, { Request, Response, NextFunction, response } from 'express';

import { AppError } from '../errors/AppError';
import { router } from './routes';

const app = express();

app.use(express.json());

app.use(cors());
app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message,
    });
  }
  return response.status(500).json({
    status: 'error',
    message: `Internal Server Error - ${err.message}`,
  });
});

export { app };
