import {IHttpRequest} from 'interfaces/IHttp';
import {IGetDashboard, IDashboard} from 'interfaces/IDashboard';

const makeGetDashboardInfo = (getDashboard: IGetDashboard) => {
  return async (httpRequest: IHttpRequest) => {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const type: string = httpRequest.params.dashboard;
      const dashboard: IDashboard= await getDashboard(type);
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