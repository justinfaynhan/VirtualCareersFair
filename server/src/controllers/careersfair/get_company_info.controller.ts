import {IHttpRequest} from 'interfaces/IHttp';
import {ICompanyInfo, IGetCompanyInfo} from 'interfaces/ICompany';
import {is_authorized} from 'utils/auth';

const makeGetCompanyInfo = (getCompanyInfo: IGetCompanyInfo) => {
  return async (httpRequest: IHttpRequest) => {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const authorizations = is_authorized(httpRequest.query.user_token);
      if (!authorizations.includes('ADMIN')) throw new Error('Unauthorized, must be ADMIN.');

      const id: string = httpRequest.params.id;
      const companyInfo = await getCompanyInfo(id);
      return {
        headers,
        statusCode: 200,
        body: companyInfo
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

export default makeGetCompanyInfo;