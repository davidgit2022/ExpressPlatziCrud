import { Router } from 'express';
import * as categoriesController from '../controllers/categoriesController.js'


const router = Router();

router.get('/',categoriesController.getCategories);
router.post('/',categoriesController.createCategory);


export default router;