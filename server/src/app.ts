import express from 'express';
import * as swaggerUi from 'swagger-ui-express';
import cors from 'cors';
import makeCallback from 'utils/callback';

import { RegisterRoutes } from "./routes";

import config from 'config'
import request_logger from 'middleware/request_logger';
import body_handler from 'middleware/body_handler';

import setupDb from 'db';

const app = express();
app.use(cors());

app.use(body_handler);
app.use(request_logger);

RegisterRoutes(app);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Hmm something went wrong.');
});

const port = config.PORT;

setupDb();

import swaggerDocument from './swagger.json';
app.use('', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});