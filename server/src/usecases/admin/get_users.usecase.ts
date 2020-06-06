import {IGetUsersList} from 'interfaces/IAdmin';

import {IUserDbAccess} from 'interfaces/dbaccess';

import {IAdminEntity, ICompanyEntity, IStudentEntity} from 'interfaces/entities'

const makeGetUsers = (userDb: IUserDbAccess) => {
  const getUsers: IGetUsersList = async (type: string) => {
    // working
    if (type !== 'ADMIN' && type !== 'STUDENT' && type !== 'COMPANY') {
      throw new Error(`Error, provided type arg '${type} is invalid, must be STUDENT, ADMIN or COMPANY`);
    }
    const users = await userDb.findAll({types: [type]});
    if (type === 'ADMIN') {
      const admins = (users as IAdminEntity[]);
      return {
        type,
        list: admins.map((data) => ({
          id: data._id ? data._id : '',
          email: data.email ? data.email : '',
        }))
      };
    } else if (type === 'COMPANY') {
      const companies = (users as ICompanyEntity[]);
      return {
        type,
        list: companies.map((data) => ({
          id: data._id ? data._id : '',
          name: data.name ? data.name : undefined,
          email: data.email ? data.email : '',
          filled_info: Object.entries(data).reduce((acc, cur) => cur[1] && cur[0] !== '_id' ? acc + 1 : acc, 0) / (Object.keys(data).length - 1), // get percentage progress of how much info filled, lol
          contact_info: data.contact_email ? data.contact_email : undefined
        }))
      }
    } else {
      const students = (users as IStudentEntity[]);
      return {
        type,
        list: students.map((data) => ({
          id: data._id ? data._id : '',
          email: data.email ? data.email : '',
          first_name: data.first_name ? data.first_name : undefined,
          last_name: data.last_name ? data.last_name : undefined,
          completed_profile: Object.entries(data).reduce((acc, cur) => cur[1] && cur[0] !== '_id' ? acc + 1 : acc, 0) / (Object.keys(data).length - 1),
          uni: data.uni ? data.uni : undefined,
          degree: data.degree ? data.degree : undefined,
        }))
      }
    }
    // return {
    //   type: 'company',
    //   list: [{
    //     id: 'ididididididid',
    //     name: 'string',
    //     email: 'string',
    //     filled_info: 0.5,
    //     contact_info: 'stub@stub.com',
    //   }, {
    //     id: 'yoyoyoyoyo',
    //     name: 'string',
    //     email: 'string',
    //     filled_info: 0.6,
    //     contact_info: 'stub@stub.com',
    //   }]
    // }
  }
  return getUsers;
}

export default makeGetUsers;