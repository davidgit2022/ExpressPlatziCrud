import express from "express";
import { boomErrorHandler, errorHandler, logErrors} from "./middlewares/error.handler.js";
import cors from "cors";

import apiRouter from './server/index.js';

const app = express();

app.use(express.json());

/* Código acceso restringido 
const whiteList = ['http://localhost:8000', 'https://myapp.co'];
const options = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('No permitido'));
    }
  }
}
app.use(cors(options)); 
*/

app.use(cors());

app.get('/api', (req, res) => {
  res.send('Hola mi server en express');
})

/* Routes */
apiRouter(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


export default app;
