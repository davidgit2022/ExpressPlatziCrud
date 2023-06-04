import express from "express";
import productRouter from '../routes/product.routes.js';
import categoriesRouter from '../routes/categories.routes.js'
import userRouter from "../routes/users.routes.js";


function apiRouter(app) {
  const router = express.Router();

  app.use('/api/v1', router);
  router.use('/products', productRouter);
  router.use('/categories', categoriesRouter);
  router.use('/users', userRouter)
}

export default apiRouter;
