import Base, {IBaseConstructor} from 'entities/base.entity';

export interface IUserConstructor extends IBaseConstructor {
  hash: (password: string) => Promise<string>;
  email_validate: (email: string) => boolean;
}

export class User extends Base {
  protected _hash: (password: string) => Promise<string>;
  protected _email_validate: (email: string) => boolean;

  protected _email: string | null;
  protected _password: string | null;

  constructor(args: IUserConstructor) {
    super({id_gen: args.id_gen});
    this._hash = args.hash;
    this._email_validate = args.email_validate;

    this._email = null;
    this._password = null;
  }
  get email() {
    return this._email;
  }
  get password() {
    return this._password;
  }
  Make(data: any) {
    throw new Error('Make method not implemented.');
  }
}

export default User;