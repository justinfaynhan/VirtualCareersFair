import {IHttpRequest} from 'interfaces/IHttp';
import {IInviteUser} from 'interfaces/IAdmin';
import {is_authorized} from 'utils/auth';

const makeInviteUser = (inviteUser: IInviteUser) => {
  return async (httpRequest: IHttpRequest) => {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const authorizations = is_authorized(httpRequest.query.user_token);
      if (!authorizations.includes('ADMIN')) throw new Error('Unauthorized, must be ADMIN.');
      
      const email: string = httpRequest.params.email;
      const type: string = httpRequest.params.type;
      const invite_code = await inviteUser(type, email);
      return {
        headers,
        statusCode: 200,
        body: invite_code
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

export default makeInviteUser;