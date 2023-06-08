import { Router } from 'express';
import * as userController from '../controllers/userController.js';
import validatorHandler from "../middlewares/validator.handler.js";
import { createUserSchema, updateUserSchema, getUserSchema, deleteUserSchema } from "../schemas/user.schema.js";

const router = Router();

router.get('/', userController.getUsers);

router.get('/:id', validatorHandler(getUserSchema, 'params'), userController.getOneUser);

router.post('/', validatorHandler(createUserSchema, 'body'), userController.createUser);

router.patch('/:id', validatorHandler(getUserSchema, 'params'),
    validatorHandler(updateUserSchema, 'body'), userController.updateUser);

router.delete('/:id', validatorHandler(deleteUserSchema, 'params'), userController.deleteUser);

export default router;
