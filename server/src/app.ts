import express from 'express';
import bodyParser from 'body-parser';
import * as swaggerUi from 'swagger-ui-express';

import { RegisterRoutes } from "./routes";

import config from 'config'
const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

RegisterRoutes(app);

const port = config.PORT;

try {
	const swaggerDocument = require('./swagger.json');
	app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
} catch (err) {
	console.error('Unable to read swagger.json', err);
}

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});