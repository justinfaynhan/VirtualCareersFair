import {IHttpRequest} from 'interfaces/IHttp';
import {ILogin} from 'interfaces/IAuthentication';

const makeRegister = (login: ILogin) => {
  return async (httpRequest: IHttpRequest) => {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const username: string = httpRequest.query.username;
      const password: string = httpRequest.query.password;
      const token = await login(username, password);
      return {
        headers,
        statusCode: 200,
        body: token
      }
    } catch (e) {
      // TODO: Error logging
      console.log(e)
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