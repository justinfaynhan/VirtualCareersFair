import {IHttpRequest} from 'interfaces/IHttp';
import {ICompanyInfo, IGetCompanyInfo} from 'interfaces/ICompany';

const makeGetCompanyInfo = (getCompanyInfo: IGetCompanyInfo) => {
  return async (httpRequest: IHttpRequest) => {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const id: string = httpRequest.params.id;
      const companyInfo = await getCompanyInfo(id);
      return {
        headers,
        statusCode: 200,
        body: companyInfo
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

export default makeGetCompanyInfo;