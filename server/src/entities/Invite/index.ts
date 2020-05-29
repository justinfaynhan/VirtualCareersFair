import Invite from 'entities/Invite/invite.entity';

const invite_code_gen = () => {
  return 'secret invite code';
}

export const makeInvite = new Invite(invite_code_gen);

export default makeInvite;