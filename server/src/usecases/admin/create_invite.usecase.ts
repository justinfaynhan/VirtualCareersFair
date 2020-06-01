import {IInviteUser} from 'interfaces/IAdmin';

import {IInviteDbAccess} from 'interfaces/dbaccess';
import {IInviteEntity} from 'interfaces/entities'

import {makeInvite} from 'entities/Invite';

const makeCreateInvite = (inviteDb: IInviteDbAccess) => {
  const createInvite: IInviteUser = async (type: string, email: string) => {
    var today = new Date();
    var tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000)).toISOString();
    const invite = makeInvite.Make({privilege: type, expiry: tomorrow}).Fetch();
    const res = (await inviteDb.insertOne(invite) as IInviteEntity);
    console.log(res);
    return {
      invite_code: res.invite_code
    }
    // return {
    //   invite_code: 'secret'
    // }
  }
  return createInvite;
}

export default makeCreateInvite;