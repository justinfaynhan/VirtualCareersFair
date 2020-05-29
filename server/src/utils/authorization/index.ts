import * as express from 'express';
import jwt from 'jsonwebtoken';

import {IAuthorizationTypes} from 'interfaces/IAuthorization';

export const isAuthorized = (user_token: string, authorizations: Array<IAuthorizationTypes>) => {
  // check token if provided in req
  // check if token valid jwt
  // if valid, update request object with privileges, 
  return true;
}