import {IRegister} from 'interfaces/IAuthentication';
import {IInviteDbAccess, IStudentDbAccess, ICompanyDbAccess, IAdminDbAccess} from 'interfaces/dbaccess'

import {makeInvite, makeAdmin, makeCompany, makeStudent} from 'entities'
import {IInviteEntity, IAdminEntity, IStudentEntity, ICompanyEntity} from 'interfaces/entities'

import {token_gen} from 'utils/auth';
import {hash} from 'utils/password';

interface IDbs {
  adminDb: IAdminDbAccess;
  companyDb: ICompanyDbAccess;
  studentDb: IStudentDbAccess;
}

const makeRegisterUser = ({adminDb, companyDb, studentDb}: IDbs, inviteCodeDb: IInviteDbAccess) => {
  const registerUser: IRegister = async (email: string, password: string, invite_code: string) => {
    const res = await inviteCodeDb.findByCode({invite_code});
    if (res === null) {
      throw new Error("Error, invalid invite code provided.");
    } else if (!res._id) {
      throw new Error("Error retrieving user id.");
    } 
    if (await adminDb.findByEmail({email}) || await companyDb.findByEmail({email}) || await studentDb.findByEmail({email})) {
      throw new Error(`User with email ${email} already exists.`);
    }
    try {
      if (res.privilege === 'ADMIN') {
        const user = await makeAdmin.Make({email, password});
        await adminDb.insertOne(user);
      } else if (res.privilege === 'COMPANY') {
        const user = await makeCompany.Make({email, password});
        await companyDb.insertOne(user);
      } else if (res.privilege === 'STUDENT') {
        const user = await makeStudent.Make({email, password});
        await studentDb.insertOne(user);
      } else {
        throw new Error(`Error, invalid privilege ${res.privilege} type for user ${email}.`);
      }
      inviteCodeDb.removeOne({_id: res._id});
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