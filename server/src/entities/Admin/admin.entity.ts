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
    await this.setEmail(email);
    await this.setPassword(password);

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