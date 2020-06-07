import {IHttpRequest} from 'interfaces/IHttp';
import {IUpdateDashboard, IDashboard} from 'interfaces/IDashboard';
import {is_authorized} from 'utils/auth';

const makeUpdateDashboardInfo = (updateDashboard: IUpdateDashboard) => {
  return async (httpRequest: IHttpRequest) => {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const authorizations = is_authorized(httpRequest.query.user_token);
      if (!authorizations.includes('ADMIN')) throw new Error('Unauthorized, must be ADMIN.');

      const type: string = httpRequest.params.type;
      const dashboard: any = httpRequest.body;
      const new_dashboard = await updateDashboard(type, dashboard);
      return {
        headers,
        statusCode: 200,
        body: new_dashboard
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

export default makeUpdateDashboardInfo;