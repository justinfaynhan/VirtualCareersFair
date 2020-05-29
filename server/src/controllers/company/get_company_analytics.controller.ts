import {IHttpRequest} from 'interfaces/IHttp';
import {IGetCompanyAnalytics, IAnalytics} from 'interfaces/ICompany';

const makeGetCompanyAnalytics = (getCompanyAnalytics: IGetCompanyAnalytics) => {
  return async (httpRequest: IHttpRequest) => {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const id = httpRequest.params.id;
      const analytics = await getCompanyAnalytics(id);
      return {
        headers,
        statusCode: 200,
        body: analytics
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

export default makeGetCompanyAnalytics;