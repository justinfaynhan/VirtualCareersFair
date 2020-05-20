import {IHttpRequest} from 'interfaces/IHttp';
import {IGetUsersList} from 'interfaces/IAdmin';

const makeGetUsersList = (getUsersList: IGetUsersList) => {
  return async (httpRequest: IHttpRequest) => {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const type = httpRequest.params.type;
      const companiesList = await getUsersList(type);
      return {
        headers,
        statusCode: 200,
        body: companiesList
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

export default makeGetUsersList;