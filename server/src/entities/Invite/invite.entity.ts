import {IAuthorizationTypes} from 'interfaces/IAuthorization';
import Base from 'entities/base.entity';

export class Invite extends Base {
  _code_gen: () => number | string;

  _code: string | null;
  _privilege: IAuthorizationTypes | null;
  _expiry: Date | null;

  constructor(code_gen: () => number | string) {
    super();
    this._code_gen = code_gen;
    this._code = null;
    this._privilege = null;
    this._expiry = null;
  }
  get privilege() {
    return this._privilege;
  }
  set privilege(privilege: IAuthorizationTypes) {

  }
  get expiry() {
    return this._expiry;
  }
  set expiry(expiry: Date) {

  }
  Make() {
    
  }
}

export default Invite;