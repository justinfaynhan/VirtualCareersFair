import Admin from 'entities/Admin/admin.entity';
import {id_gen} from 'utils/id';
import {hash} from 'utils/hash';
import {validate} from 'utils/email';

export const makeAdmin = new Admin({id_gen, hash, email_validate: validate});

export default makeAdmin;