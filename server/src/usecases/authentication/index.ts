import makeRegisterUser from 'usecases/authentication/register_user.usecase';
import makeLoginUser from 'usecases/authentication/login_user.usecase';

import {ILogin, IRegister} from 'interfaces/IAuthentication';

export const registerUser: IRegister = makeRegisterUser(null, null);
export const loginUser: ILogin = makeLoginUser(null);