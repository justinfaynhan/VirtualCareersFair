import {ILogin} from 'interfaces/IAuthentication';

const makeLoginUser = (userDb) => {
  const loginUser: ILogin = async (username: string, password: string) => {
    return {
      user_token: 'sadnijwqrnirn32irj32ir32jj'
    }
  }
  return loginUser;
}

export default makeLoginUser;