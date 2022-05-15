import { Router } from 'express';

import { CarController } from '../../../app/controllers/CarController';

export const carRoutes = Router();

const carController = new CarController();

carRoutes.post('/', carController.handle);
