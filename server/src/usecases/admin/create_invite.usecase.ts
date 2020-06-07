import {IInviteUser} from 'interfaces/IAdmin';

import {IInviteDbAccess} from 'interfaces/dbaccess';

import {makeInvite} from 'entities/Invite';

const makeCreateInvite = (inviteDb: IInviteDbAccess) => {
  const createInvite: IInviteUser = async (type, email) => {
    var today = new Date();
    var tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000)).toISOString();
    const invite = await makeInvite.Make({privilege: type, expiry: tomorrow});
    const res = await inviteDb.insertOne(invite);
    return {
      invite_code: res.invite_code
    }
  }
  return createInvite;
}

export default makeCreateInvite;