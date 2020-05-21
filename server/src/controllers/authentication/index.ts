import makeRegister from 'controllers/authentication/register.controller';
import makeLogin from 'controllers/authentication/login.controller';

import {addUser, getUser} from 'usecases';

const register = makeRegister(addUser);
const login = makeLogin(getUser);

const authenticationController = Object.freeze({
  register,
  login
});

export default authenticationController;
export {register, login};