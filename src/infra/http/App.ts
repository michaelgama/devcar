import 'reflect-metadata';
import 'express-async-errors';

import cors from 'cors';
import express, { Request, Response, NextFunction } from 'express';

const app = express();

app.use(express.json());

app.use(cors());

export { app };
