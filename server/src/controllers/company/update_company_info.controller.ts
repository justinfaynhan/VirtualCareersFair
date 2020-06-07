import {IHttpRequest} from 'interfaces/IHttp';
import {IUpdateCompanyInfo, ICompanyInfo} from 'interfaces/ICompany';
import {is_authorized} from 'utils/auth';

const makeUpdateCompanyInfo = (updateCompanyInfo: IUpdateCompanyInfo) => {
  return async (httpRequest: IHttpRequest) => {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const authorizations = is_authorized(httpRequest.query.user_token);
      if (!authorizations.includes('COMPANY')) throw new Error('Unauthorized, must be COMPANY.');
      
      const id = httpRequest.params.id;
      const info: any = httpRequest.body;
      const new_info = await updateCompanyInfo(id, info);
      return {
        headers,
        statusCode: 200,
        body: new_info
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

export default makeUpdateCompanyInfo;