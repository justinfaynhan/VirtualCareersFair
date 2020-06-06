import User, {IUserConstructor} from 'entities/User/user.entity';
import {IAdminEntity, IAdminEntityMakeArgs} from 'interfaces/entities/IAdmin.entity';

interface IAdminConstructor extends IUserConstructor{
}
export class Admin extends User {

  constructor(args: IAdminConstructor) {
    super(args);
  }
  async Make({
    email,
    password
  }: IAdminEntityMakeArgs) {
    if (email) {
      if (this._email_validate(email)) {
        this._email = email;
      } else {
        throw new Error(`Error, '${email}' is an invalid email address.`)
      }
    } else {
      this._email = null;
    }

    if (password) {
      try {
        this._password = await this._hash(password);
      } catch {
        throw new Error(`Error, failed to hash ${password}.`)
      }
    } else {
      this._password = null;
    }

    return {
      _id: this._id,
      created_at: this._created_at,
      updated_at: this._updated_at,
      email: this._email,
      password: this._password
    } as IAdminEntity;
  }
}
export default Admin;