import User, {IUserConstructor} from 'entities/User/user.entity';
import {IAdminEntity} from 'interfaces/entities/IAdmin.entity';

interface IAdminConstructor extends IUserConstructor{
}
export class Admin extends User {

  constructor(args: IAdminConstructor) {
    super(args);
  }
  async Make(data: Omit<IAdminEntity, '_id'|'created_at'|'updated_at'>) {
    if (this._email_validate(data.email)) {
      this._email = data.email;
    } else {
      throw new Error(`Error, '${data.email}' is an invalid email address.`)
    }

    try {
      this._password = await this._hash(data.password);
    } catch {
      throw new Error(`Error, failed to hash ${data.password}.`)
    }
  }
}
export default Admin;