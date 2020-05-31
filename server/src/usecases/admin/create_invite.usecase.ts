import {IInviteUser} from 'interfaces/IAdmin';

import {IInviteDbAccess} from 'interfaces/dbaccess/IInviteDb';

import {makeInvite} from 'entities/Invite';

const makeCreateInvite = (inviteDb: IInviteDbAccess) => {
  const createInvite: IInviteUser = async (type: string, email: string) => {
    var today = new Date();
    var tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000)).toISOString();
    const invite = makeInvite.Make({privilege: type, expiry: tomorrow});
    return inviteDb.insert({
      expiry: invite.expiry,
      privilege: invite.privilege
    })
    // return {
    //   invite_code: 'secret'
    // }
  }
  return createInvite;
}

export default makeCreateInvite;