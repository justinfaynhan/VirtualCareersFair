import {IHttpRequest} from 'interfaces/IHttp';
import {IGetStudentProfile, IStudentProfile} from 'interfaces/IStudent';
import {is_authorized} from 'utils/auth';

const makeGetStudentProfile = (getStudentProfile: IGetStudentProfile) => {
  return async (httpRequest: IHttpRequest) => {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const authorizations = is_authorized(httpRequest.query.user_token);
      
      const id: string = httpRequest.params.id;
      const profile = await getStudentProfile(id);
      return {
        headers,
        statusCode: 200,
        body: profile
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

export default makeGetStudentProfile;