import { Router } from 'express';
import * as userController from '../controllers/userController.js';

const router = Router();

router.get('/users', userController.getUsers);

export default router;
