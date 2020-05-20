import {IHttpRequest} from 'interfaces/IHttp';
import {IGetStudentProfile, IStudentProfile} from 'interfaces/IStudent';

const makeGetStudentProfile = (getStudentProfile: IGetStudentProfile) => {
  return async (httpRequest: IHttpRequest) => {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const id: string = httpRequest.params.id;
      const profile: IStudentProfile= await getStudentProfile(id);
      return {
        headers,
        statusCode: 200,
        body: profile
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

export default makeGetStudentProfile;