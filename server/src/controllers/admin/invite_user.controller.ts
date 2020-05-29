import {IHttpRequest} from 'interfaces/IHttp';
import {IInviteUser} from 'interfaces/IAdmin';

const makeInviteUser = (inviteUser: IInviteUser) => {
  return async (httpRequest: IHttpRequest) => {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
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

export default makeInviteUser;