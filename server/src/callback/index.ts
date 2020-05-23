import * as express from 'express';

const makeCallback = (controller) => {
  // return async (req: express.Request, res: express.Response) => {
    return async (req: express.Request) => {
    const httpRequest = {
      body: req.body,
      query: req.query,
      params: req.params,
      ip: req.ip,
      method: req.method,
      path: req.path,
      headers: {
        'Content-Type': req.get('Content-Type'),
        Referer: req.get('referer'),
        'User-Agent': req.get('User-Agent')
      }
    }
    // controller(httpRequest)
    //   .then(httpResponse => {
    //     if (httpResponse.headers) {
    //       res.set(httpResponse.headers)
    //     }
    //     res.type('json')
    //     res.status(httpResponse.statusCode).send(httpResponse.body)
    //   })
    //   .catch(e => res.status(500).send({ error: 'An unknown error occurred.' }))
    const httpResponse = await controller(httpRequest);
    console.log(httpResponse);
    return httpResponse;
  }
}

export default makeCallback;