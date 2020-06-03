import {IRegister} from 'interfaces/IAuthentication';
import {IInviteDbAccess, IStudentDbAccess, ICompanyDbAccess, IAdminDbAccess} from 'interfaces/dbaccess'

import {makeInvite, makeAdmin, makeCompany, makeStudent} from 'entities'
import {IInviteEntity, IAdminEntity, IStudentEntity, ICompanyEntity} from 'interfaces/entities'

import {token_gen} from 'utils/auth';

interface IDbs {
  adminDb: IAdminDbAccess;
  companyDb: ICompanyDbAccess;
  studentDb: IStudentDbAccess;
}

const makeRegisterUser = ({adminDb, companyDb, studentDb}: IDbs, inviteCodeDb: IInviteDbAccess) => {
  const registerUser: IRegister = async (email: string, password: string, invite_code: string) => {
    const res = (await inviteCodeDb.findByCode({invite_code}) as IInviteEntity);
    if (res === null) {
      throw new Error("Error, invalid invite code provided.");
    } else {
      try {
        inviteCodeDb.removeOne({_id: res._id});
      } catch(e) {
        throw new Error('Error removing existing invite code: ' + e);
      }
    }
    try {
      if (res.privilege === 'ADMIN') {
        const user = makeAdmin.Make({email, password});
        adminDb.insertOne(user);
      } else if (res.privilege === 'COMPANY') {
        const user = makeCompany.Make({email, password});
        companyDb.insertOne(user);
      } else if (res.privilege === 'STUDENT') {
        const user = makeStudent.Make({email, password});
        studentDb.insertOne(user);
      } else {
        throw new Error(`Error, invalid privilege ${res.privilege} type for user ${email}.`);
      }
    } catch(e) {
      throw new Error('Error adding new user: ' + e);
    }

    return {
      user_token: token_gen({email, authorization: res.privilege})
    }
  }
  return registerUser;
}

export default makeRegisterUser;