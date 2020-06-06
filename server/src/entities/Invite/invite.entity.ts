import {IAuthorizationTypes} from 'interfaces/IAuthorization';
import Base, {IBaseConstructor} from 'entities/base.entity';
import {IInviteEntity, IInviteEntityMakeArgs} from 'interfaces/entities/IInvite.entity'

export interface IInviteConstructor extends IBaseConstructor {
  code_gen: () => string;
  is_valid_date: (date: string | Date) => boolean;
}
export class Invite extends Base {
  private _code_gen: () => string;
  private _is_valid_date: (date: string | Date) => boolean;

  private _invite_code: string | null;
  private _privilege: IAuthorizationTypes | null;
  private _expiry: Date | string | null;

  constructor(args: IInviteConstructor) {
    super({id_gen: args.id_gen});
    this._code_gen = args.code_gen;
    this._is_valid_date = args.is_valid_date;

    this._invite_code = null;
    this._privilege = null;
    this._expiry = null;
  }
  get privilege() {
    return this._privilege;
  }
  get expiry() {
    return this._expiry;
  }
  async Make({privilege, expiry}: IInviteEntityMakeArgs) {
    this._invite_code = this._code_gen();
    if (privilege === 'ADMIN' || privilege === 'STUDENT' || privilege === 'COMPANY') {
      this._privilege = privilege;
    } else {
      throw new Error(`Error, could not assign invalid privilege type for invite code: ${privilege}.`);
    }
    if (expiry && !this._is_valid_date(expiry)) {
      throw new Error(`Error, ${expiry} is not a valid date for Invite entity.`);
    }
    this._expiry = expiry ? expiry : null;
    return {
      _id: this._id,
      created_at: this._created_at,
      updated_at: this._updated_at,
      invite_code: this._invite_code,
      privilege: this._privilege,
      expiry: this._expiry
    } as IInviteEntity;
  }
}

export default Invite;