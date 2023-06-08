import { Router } from 'express';
import * as productController from '../controllers/productController.js';
import validatorHandler from '../middlewares/validator.handler.js';
import { getProductSchema, createProductSchema, updateProductSchema, deleteProductSchema } from "../schemas/product.schema.js";


const router = Router();

router.get('/', productController.getProducts);

router.get('/:id', validatorHandler(getProductSchema, 'params'), productController.getOneProduct);

router.post('/', validatorHandler(createProductSchema, 'body'), productController.createProduct);

router.patch('/:id', validatorHandler(getProductSchema, 'params'),
    validatorHandler(updateProductSchema, 'body'), productController.updateProduct);

router.delete('/:id', validatorHandler(deleteProductSchema, 'params'), productController.deleteProduct);

export default router;
