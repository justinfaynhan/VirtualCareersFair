import express from 'express';
import bodyparser from 'body-parser';

import config from 'server_config'
const app = express();
const port = config.PORT;

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});