import User from 'entities/User/user.entity';
import {id_generator} from 'utils/id';
import {hash} from 'utils/hash';

export const makeUser = new User(id_generator, hash);

export default makeUser;