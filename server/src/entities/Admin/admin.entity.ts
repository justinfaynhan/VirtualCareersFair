import User from 'entities/User/user.entity';

export class Admin extends User {

  constructor(
    id: () => number|string, 
    hash: (password: string) => string, 
  ) {
    super(id, hash);
  }
  Make() {
    
  }
}
export default Admin;