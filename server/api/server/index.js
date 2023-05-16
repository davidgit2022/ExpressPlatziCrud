import express from "express";
import productRouter from '../routes/product.routes.js';
import userRouter from "../routes/users.routes.js";


function apiRouter(app) {
  const router = express.Router();

  app.use('/api/v1', router);
  router.use('/products', productRouter);
  router.use('/categories', productRouter);
  router.use('/users', userRouter)
}

export default apiRouter;
