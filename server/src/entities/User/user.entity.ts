import Base from 'entities/base.entity';

export class User extends Base {
  _id: () => number | string;
  _hash: (password: string) => string;

  _email: string | null;
  _password: string | null;

  constructor(id: () => number|string , hash: (password: string) => string) {
    super();
    this._id = id;
    this._hash = hash;
    this._email = null;
    this._password = null;
  }
  get email() {
    return this._email;
  }
  set email(email: string) {

  }
  get password() {
    return this._password;
  }
  set password(password: string) {

  }
}

export default User;