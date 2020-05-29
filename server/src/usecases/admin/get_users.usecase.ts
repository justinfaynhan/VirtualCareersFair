import {IGetUsersList} from 'interfaces/IAdmin';

const makeGetUsers = (userDb) => {
  const getUsers: IGetUsersList = async (type: string) => {
    return {
      type: 'student',
      list: [{
        id: 'ididididididid',
        name: 'string',
        email: 'string',
        filled_info: true,
        contact_info: 'stub@stub.com',
      }, {
        id: 'yoyoyoyoyo',
        name: 'string',
        email: 'string',
        filled_info: true,
        contact_info: 'stub@stub.com',
      }]
    }
  }
  return getUsers;
}

export default makeGetUsers;