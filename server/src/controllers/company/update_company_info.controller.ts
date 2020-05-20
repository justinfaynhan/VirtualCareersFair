import {IHttpRequest} from 'interfaces/IHttp';
import {IUpdateCompanyInfo, ICompanyInfo} from 'interfaces/ICompany';

const makeUpdateCompanyInfo = (updateCompanyInfo: IUpdateCompanyInfo) => {
  return async (httpRequest: IHttpRequest) => {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const id = httpRequest.params.id;
      const info = httpRequest.params.body;
      const new_info: ICompanyInfo = await updateCompanyInfo(id, info);
      return {
        headers,
        statusCode: 200,
        body: new_info
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

export default makeUpdateCompanyInfo;