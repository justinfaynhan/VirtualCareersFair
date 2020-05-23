import * as express from 'express';
import jwt from 'jsonwebtoken';

import {IAuthorizationTypes} from 'interfaces/IAuthorization';

export const isAuthorized = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  // check token if provided in req
  // check if token valid jwt
  // if valid, update request object with privileges, call nexet()
  // otherwise redirect
  next();
}

export const isAdmin = (req: express.Request, res: express.Response, next: express.NextFunction) => {

}

export const isCompany = (req: express.Request, res: express.Response, next: express.NextFunction) => {

}

export const isStudent = (req: express.Request, res: express.Response, next: express.NextFunction) => {

}