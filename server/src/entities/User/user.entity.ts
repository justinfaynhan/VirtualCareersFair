import Base, {IBaseConstructor} from 'entities/base.entity';

export interface IUserConstructor extends IBaseConstructor {
  hash: (password: string) => Promise<string>;
  email_validate: (email: string) => boolean;
  password_validate: (password: string) => boolean;
}

export class User extends Base {
  protected _hash: (password: string) => Promise<string>;
  protected _email_validate: (email: string) => boolean;
  protected _password_validate: (password: string) => boolean;

  protected _email: string | null;
  protected _password: string | null;

  constructor(args: IUserConstructor) {
    super({id_gen: args.id_gen});
    this._hash = args.hash;
    this._email_validate = args.email_validate;
    this._password_validate = args.password_validate;

    this._email = null;
    this._password = null;
  }
  get email() {
    return this._email;
  }
  protected async setEmail(email?: string) {
    if (email) {
      if (this._email_validate(email)) {
        this._email = email;
      } else {
        throw new Error(`Error, '${email}' is an invalid email address.`)
      }
    } else {
      this._email = null;
    }
  }
  get password() {
    return this._password;
  }
  protected async setPassword(password?: string) {
    if (password) {
      if (!this._password_validate(password)) {
        throw new Error(`Error, password does not meet security requirements.`);
      }
      try {
        this._password = await this._hash(password);
      } catch {
        throw new Error(`Error, failed to hash ${password}.`)
      }
    } else {
      this._password = null;
    }
  }
  Make({}: any) {
    throw new Error('Make method not implemented.');
  }
}

export default User;