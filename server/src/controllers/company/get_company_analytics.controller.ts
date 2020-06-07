import {IHttpRequest} from 'interfaces/IHttp';
import {IGetCompanyAnalytics} from 'interfaces/ICompany';
import {is_authorized} from 'utils/auth';

const makeGetCompanyAnalytics = (getCompanyAnalytics: IGetCompanyAnalytics) => {
  return async (httpRequest: IHttpRequest) => {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const authorizations = is_authorized(httpRequest.query.user_token);
      if (!authorizations.includes('COMPANY')) throw new Error('Unauthorized, must be COMPANY.');
      
      const id = httpRequest.params.id;
      const analytics = await getCompanyAnalytics(id);
      return {
        headers,
        statusCode: 200,
        body: analytics
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

export default makeGetCompanyAnalytics;