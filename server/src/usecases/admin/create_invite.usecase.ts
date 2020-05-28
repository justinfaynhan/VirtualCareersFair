import {IInviteUser} from 'interfaces/IAdmin';

const makeCreateInvite = (inviteDb) => {
  const createInvite: IInviteUser = async (type: string, email: string) => {
    return {
      invite_code: 'secret'
    }
  }
  return createInvite;
}

export default makeCreateInvite;