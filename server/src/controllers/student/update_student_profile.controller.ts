import {IHttpRequest} from 'interfaces/IHttp';
import {IUpdateStudentProfile, IStudentProfile} from 'interfaces/IStudent';

const makeUpdateStudentProfile = (updateStudentProfile: IUpdateStudentProfile) => {
  return async (httpRequest: IHttpRequest) => {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const id: string = httpRequest.params.id;
      const profile: any = httpRequest.body;
      const new_profile  = await updateStudentProfile({...profile, id});
      return {
        headers,
        statusCode: 200,
        body: new_profile
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

export default makeUpdateStudentProfile;