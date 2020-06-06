import express from 'express';
import bodyParser from 'body-parser';
import * as swaggerUi from 'swagger-ui-express';
import cors from 'cors';

import { RegisterRoutes } from "./routes";

import config from 'config'
import requestLogger from 'middleware/request_logger';
import setupDb from 'db';

const app = express();
app.use(cors());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(requestLogger);

RegisterRoutes(app);

const port = config.PORT;

setupDb();

import swaggerDocument from './swagger.json';
app.use('', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});