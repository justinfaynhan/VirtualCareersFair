import Admin from 'entities/Admin/admin.entity';
import {id_gen} from 'utils/id';
import {hash, password_validate} from 'utils/password';
import {email_validate} from 'utils/email';

export const makeAdmin = new Admin({id_gen, hash, email_validate, password_validate});

export default makeAdmin;