import makeRegisterUser from 'usecases/authentication/register_user.usecase';
import makeLoginUser from 'usecases/authentication/login_user.usecase';

import {ILogin, IRegister} from 'interfaces/IAuthentication';
import {adminDb, studentDb, companyDb, inviteDb} from 'dbaccess'

export const registerUser: IRegister = makeRegisterUser({adminDb, studentDb, companyDb}, inviteDb);
export const loginUser: ILogin = makeLoginUser({adminDb, studentDb, companyDb});