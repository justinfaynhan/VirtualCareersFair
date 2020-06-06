import {IHttpRequest} from 'interfaces/IHttp';
import {IGetCareersFairLanding, ICareersFairLandingCompany} from 'interfaces/ICareersFair';
import {is_authorized} from 'utils/auth';

const makeGetCareersFairLanding = (getCareersFairLanding: IGetCareersFairLanding) => {
  return async (httpRequest: IHttpRequest) => {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const authorizations = is_authorized(httpRequest.query.user_token);

      const careersFair = await getCareersFairLanding();
      return {
        headers,
        statusCode: 200,
        body: careersFair
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

export default makeGetCareersFairLanding;