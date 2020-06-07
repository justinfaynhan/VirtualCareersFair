import jwt from 'jsonwebtoken';
import config from 'config';
import {IAuthorizationTypes} from 'interfaces/IAuthorization';

interface ITokenPayload {
  email: string;
  authorization: string;
}

export const token_gen = ({email, authorization}: ITokenPayload) => {
  // Sign token with 4hour expiry
  return jwt.sign({email, authorization}, config.AUTH.JWT.SECRET, {expiresIn: 60 * 60 * 4});
}

export const token_decode = (token: string) => {
  return jwt.verify(token, config.AUTH.JWT.SECRET, {complete: true});
}

export const is_authorized = (user_token: string) => {
  // Returns array of authorization privileges based on decoded token
  try {
    const decoded = (token_decode(user_token) as {payload: ITokenPayload, header: any, signature: any});
    const {authorization} = decoded.payload;
    return ['ADMIN', 'COMPANY', 'STUDENT'].filter((auth) => {
      if (authorization === 'ADMIN') {
        return true;
      } else if (authorization === 'COMPANY' && (auth === 'COMPANY' || auth === 'STUDENT')) {
        return true
      } else if (authorization === 'STUDENT' && auth === 'STUDENT') {
        return true
      } else {
        return false;
      }
    });
  } catch(e) {
    throw new Error('Error decoding token: ' + e);
  }
}