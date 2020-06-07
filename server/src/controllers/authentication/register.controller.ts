import {IHttpRequest} from 'interfaces/IHttp';
import {IRegister} from 'interfaces/IAuthentication';

const makeRegister = (register: IRegister) => {
  return async (httpRequest: IHttpRequest) => {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const email: string = httpRequest.query.email;
      const password: string = httpRequest.query.password;
      const invite_code: string = httpRequest.query.invite_code;
      const token = await register(email, password, invite_code);
      return {
        headers,
        statusCode: 200,
        body: token
      }
    } catch (e) {
      // TODO: Error logging
      console.error(e)
      return {
        headers,
        statusCode: 400,
        body: {
          error: e.message
        }
      }
    }
  }
}

export default makeRegister;