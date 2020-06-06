import {IHttpRequest} from 'interfaces/IHttp';
import {IGetDashboard, IDashboard} from 'interfaces/IDashboard';
import {is_authorized} from 'utils/auth';

const makeGetDashboardInfo = (getDashboard: IGetDashboard) => {
  return async (httpRequest: IHttpRequest) => {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const authorizations = is_authorized(httpRequest.query.user_token);
      
      const type: string = httpRequest.params.type;
      const dashboard = await getDashboard(type);
      return {
        headers,
        statusCode: 200,
        body: dashboard
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

export default makeGetDashboardInfo;