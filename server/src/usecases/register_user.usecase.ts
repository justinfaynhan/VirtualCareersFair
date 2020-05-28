// import makeUser from 'entities';
import {IRegister} from 'interfaces/IAuthentication';

const makeRegisterUser = (userDb, inviteCodeDb) => {
  const registerUser: IRegister = async (username: string, password: string, invite_code: string) => {
    return {
      user_token: '324u32i4n32i4n32iniubsdi'
    }
  }
  return registerUser;
}

export default makeRegisterUser;