import User, {IUserConstructor} from 'entities/User/user.entity';
import {IAdminEntity} from 'interfaces/entities/IAdmin.entity';

interface IAdminConstructor extends IUserConstructor{
}
export class Admin extends User {

  constructor(args: IAdminConstructor) {
    super(args);
  }
  async Make({
    email,
    password
  }: Omit<IAdminEntity, '_id'|'created_at'|'updated_at'>) {
    if (this._email_validate(email)) {
      this._email = email;
    } else {
      throw new Error(`Error, '${email}' is an invalid email address.`)
    }

    try {
      this._password = await this._hash(password);
    } catch {
      throw new Error(`Error, failed to hash ${password}.`)
    }
    return this;
  }
}
export default Admin;