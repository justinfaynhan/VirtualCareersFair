import {IHttpRequest} from 'interfaces/IHttp';
import {IGetCompanyAnalyticsDownload, IAnalyticsFile} from 'interfaces/ICompany';

const makeGetCompanyAnalyticsDownload = (getCompanyAnalyticsDownload: IGetCompanyAnalyticsDownload) => {
  return async (httpRequest: IHttpRequest) => {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const id = httpRequest.params.id
      const analytics: IAnalyticsFile = await getCompanyAnalyticsDownload(id);
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

export default makeGetCompanyAnalyticsDownload;