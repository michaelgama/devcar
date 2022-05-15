import { Router } from 'express';

import { userRoutes } from './user.routes';
import { carRoutes } from './car.routes';

export const router = Router();

router.use('/users', userRoutes);
router.use('/cars', carRoutes);
