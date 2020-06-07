import {ILogin} from 'interfaces/IAuthentication';
import {IInviteDbAccess, IStudentDbAccess, ICompanyDbAccess, IAdminDbAccess} from 'interfaces/dbaccess'

import {makeInvite, makeAdmin, makeCompany, makeStudent} from 'entities'
import {IInviteEntity, IAdminEntity, IStudentEntity, ICompanyEntity} from 'interfaces/entities'
import {IAuthorizationTypes} from 'interfaces/IAuthorization'
import {token_gen} from 'utils/auth';
import {hash, check} from 'utils/password';

interface IDbs {
  adminDb: IAdminDbAccess;
  companyDb: ICompanyDbAccess;
  studentDb: IStudentDbAccess;
}

const makeLoginUser = ({adminDb, companyDb, studentDb}: IDbs) => {
  const loginUser: ILogin = async (email, password) => {
    let authorization: IAuthorizationTypes;
    let admin_res = await adminDb.findByEmail({email});
    let company_res = await companyDb.findByEmail({email});
    let student_res = await studentDb.findByEmail({email});

    if (admin_res) {
      if (admin_res.password && !(await check(password, admin_res.password))) {
        throw new Error('Error logging in user, invalid password.');
      }
      authorization = 'ADMIN';
    } else if (company_res) {
      if (company_res.password && !(await check(password, company_res.password))) {
        throw new Error('Error logging in user, invalid password.');
      }
      authorization = 'COMPANY';
    } else if (student_res) {
      if (student_res.password && !(await check(password, student_res.password))) {
        throw new Error('Error logging in user, invalid password.');
      }
      authorization = 'STUDENT';
    } else {
      throw new Error("Error logging in user, could not find existing user.");
    }
    return {
      user_token: token_gen({email, authorization})
    }
  }
  return loginUser;
}

export default makeLoginUser;