import {IHttpRequest} from 'interfaces/IHttp';
import {IUpdateDashboard} from 'interfaces/IDashboard';

const makeUpdateDashboardInfo = (updateDashboard: IUpdateDashboard) => {
  return async (httpRequest: IHttpRequest) => {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
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

export default makeUpdateDashboardInfo;