import Admin from 'entities/Admin/admin.entity';
import {id_generator} from 'utils/id';
import {hash} from 'utils/hash';

export const makeAdmin = new Admin(id_generator, hash);

export default makeAdmin;