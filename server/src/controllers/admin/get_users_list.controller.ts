import {IHttpRequest} from 'interfaces/IHttp';
import {IGetUsersList} from 'interfaces/IAdmin';
import {is_authorized} from 'utils/auth';

const makeGetUsersList = (getUsersList: IGetUsersList) => {
  return async (httpRequest: IHttpRequest) => {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const authorizations = is_authorized(httpRequest.query.user_token);
      if (!authorizations.includes('ADMIN')) throw new Error('Unauthorized, must be ADMIN.');

      const type = httpRequest.params.type;
      const companiesList = await getUsersList(type);
      return {
        headers,
        statusCode: 200,
        body: companiesList
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

export default makeGetUsersList;