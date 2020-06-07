import * as express from 'express';
import bodyParser from 'body-parser';
import {IHttpResponse} from 'interfaces/IHttp';

export const body_handler = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  bodyParser.urlencoded({
    extended: true,
  })
  bodyParser.json()(req, res, (err) => {
    if (err) {
        console.log(err);
        const response: IHttpResponse = {
          headers: "'Content-Type': 'application/json'",
          statusCode: 400,
          body: {
            error: 'Bad request, please pass valid json data in the request body.'
          }
        }
        res.send(response);
        return;
    }
    next();
  });
};

export default body_handler;