import * as express from 'express';

const makeCallback = (controller) => {
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
    const httpResponse = await controller(httpRequest);
    console.info(httpResponse);
    return httpResponse;
  }
}

export default makeCallback;