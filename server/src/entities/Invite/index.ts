import Invite from 'entities/Invite/invite.entity';
import {code_gen} from 'utils/code';
import {id_gen} from 'utils/id';
import {is_valid_date} from 'utils/date';

export const makeInvite = new Invite({code_gen, id_gen, is_valid_date});

export default makeInvite;