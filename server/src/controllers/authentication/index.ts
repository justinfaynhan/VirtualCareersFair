import makeRegister from 'controllers/authentication/register.controller';
import makeLogin from 'controllers/authentication/login.controller';

import {registerUser, loginUser} from 'usecases';

const register = makeRegister(registerUser);
const login = makeLogin(loginUser);

const authenticationController = Object.freeze({
  register,
  login
});

export default authenticationController;
export {register, login};